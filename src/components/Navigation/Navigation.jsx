import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <h1>This is navigation</h1>
            <Outlet/>
        </div>
    );
};

export default Navigation;