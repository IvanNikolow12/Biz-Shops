import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function HomeRoot() {
    return <>
        <MainNavigation/>
        <main>
            <Outlet/>
        </main>
    </>
}

export default HomeRoot;