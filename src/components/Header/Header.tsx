import { NavLink } from "react-router-dom";

import "./Header.css";

export const Header = () => {
    return (
        <ul className="menu">
            <li className="item">
                <NavLink to="/">Dashboard</NavLink>
            </li>
            <li className="item">
                <NavLink to="/create">Create Ticket</NavLink>
            </li>
        </ul>
    );
};
