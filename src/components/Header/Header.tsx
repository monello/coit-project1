import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
    return (
        <ul className="menu">
            <li className="item">
                <Link to="/">Dashboard</Link>
            </li>
            <li className="item button">
                <Link to="/create">Create Ticket</Link>
            </li>
        </ul>
    );
};
