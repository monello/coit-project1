import { NavItem, NavItemProps } from "../../NavItem/NavItem";
import "./NavContainer.css";

export interface NavItems {
    left: NavItemProps[];
    right: NavItemProps[];
}

export const NavContainer = ({ left, right }: NavItems) => {
    return (
        <div className="nav-container">
            <div className="nav-items">
                {left.map((item) => (
                    <NavItem key={item.label} {...item} />
                ))}
            </div>
            <div className="nav-items">[LOGO]</div>
            <div className="nav-items">
                {right.map((item) => (
                    <NavItem key={item.label} {...item} />
                ))}
            </div>
        </div>
    );
};
