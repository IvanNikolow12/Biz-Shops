import { useLocation, useRouteLoaderData } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function EditProductPage() {
    const location = useLocation();
    const data = location.state?.data;
    
    return <>
        <ProductForm method="PATCH" data={data}/>
    </>
}

export default EditProductPage;