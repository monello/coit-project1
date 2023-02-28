import { Outlet } from "react-router-dom";
import { Header } from "../Header";

import "./Layout.css";

export const Layout = () => {
    return (
        <div>
            <nav>
                <Header />
            </nav>
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
