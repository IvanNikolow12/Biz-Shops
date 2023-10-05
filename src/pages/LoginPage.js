
import { Form, NavLink, json, redirect, useSearchParams } from 'react-router-dom';
import $ from 'jquery'
import './LoginPage.css'
import { useEffect } from 'react';

function LoginPage() {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';

    useEffect(() => {
      $(function() {
          $(document).ready(function() {
            $('.defaul-register-mode').addClass('button-check');
          });
      });
    }, []);

    $(function() {
      $('.nav-item-li').on('click', function() {
        $('.defaul-register-mode').removeClass('button-check');
        $(this).addClass('button-check').siblings().removeClass('button-check');
      });
    });



    return <>
    <section className="login-page-container">
      <ul className="nav  mb-3 auth-buttons" id="ex1">
        <li className="nav-item-li">
          <NavLink className="nav-link" to="?mode=login">Впиши се</NavLink>
        </li>
        <li className="nav-item-li defaul-register-mode">
          <NavLink className="nav-link " to="?mode=register">Регистрирай се</NavLink>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <Form method='post'>
            <div className="form-outline mb-4">
              <input type="email" id="loginName" name='email' className="form-control" />
              <label className="form-label" htmlFor="loginName">Въведи имейл</label>
            </div>
            <div className="form-outline mb-4">
              <input type="password" id="loginPassword" name='password' className="form-control" />
              <label className="form-label" htmlFor="loginPassword">Въведи парола</label>
            </div>
            {!isLogin && <div className="form-outline mb-4">
              <input type="password" id="loginRepeatPassword" name='repeatPassword' className="form-control" />
              <label className="form-label" htmlFor="loginPassword">Въведи повторно парола</label>
            </div>}
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                  <label className="form-check-label" htmlFor="loginCheck"> Запомни ме</label>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <NavLink to="/">Забравена парола?</NavLink>
              </div>
            </div>
            <div className='text-center'>
            <button type="submit" className="btn btn-warning btn-block mb-4">{isLogin ? 'Влез' : 'Запиши'}</button>
            </div>
            <div className="text-center">
              <p>Нямаш акаунт? <NavLink to="?mode=register">Регистрирай се</NavLink></p>
            </div>
          </Form>
        </div>
      </div>
    </section>
    </>
}

export default LoginPage;

export async function action({request, params}) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  console.log(mode)

  // if(mode !== 'login' || mode !== 'register') {
  //   console.log('hi')
  //   console.log(mode)
  //   // return json({message: 'Unsupported mode.'}, {status: 422})
  // }

  const data = await request.formData();
  // console.log(data)

  let url;
  let authData;

  if(mode === 'login') {
    authData = {
      email: data.get('email'),
      password: data.get('password')
    }
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB-90dsXCRoyoZ935XRGkZD12JSoPZZV2A`
  } else {
    authData = {
      email: data.get('email'),
      password: data.get('password'),
      repeatPassword: data.get('repeatPassword')
    }
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-90dsXCRoyoZ935XRGkZD12JSoPZZV2A`
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(authData)
  })

  if(response.status === 422 || response.status === 401) {
    return response;
  }

  if(!response.ok) {
    return json({message: 'Wrong email or password. Try again'}, {status: 500})
  }

  const resData = await response.json();
  // console.log(resData)
  const token = resData.idToken;
  const email = resData.email;

  sessionStorage.setItem('token', token);
  sessionStorage.setItem('email', email);

  return redirect('/');
}