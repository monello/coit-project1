import "./NavItem.css";

export interface NavItemProps {
    label: string;
    href: string;
}

export const NavItem = ({ label, href }: NavItemProps) => {
    return (
        <a className="nav-item" href={href} key={label}>
            {label}
        </a>
    );
};
