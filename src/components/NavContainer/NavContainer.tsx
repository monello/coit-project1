import { NavItem, NavItemProps } from "../Product/NavItem/NavItem";
import "./NavContainer.css";

export interface NavItems {
    left: NavItemProps[];
    right: NavItemProps[];
}

export const NavContainer = ({ left, right }: NavItems) => {
    const leftMenu = left.map((item) => <NavItem {...item} />);
    const rightMenu = right.map((item) => <NavItem {...item} />);

    return (
        <div className="nav-container">
            <div className="nav-items">{leftMenu}</div>
            <div className="nav-items">[LOGO]</div>
            <div className="nav-items">{rightMenu}</div>
        </div>
    );
};
