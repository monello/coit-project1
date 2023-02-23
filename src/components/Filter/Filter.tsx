import "./Filter.css";

interface FilterProps {
    label: string;
    target: string;
    isActive: boolean;
}

export const Filter = ({ label, target, isActive }: FilterProps) => {
    const filterClass = `filter-button ${isActive && "active"}`;
    return (
        <a className={filterClass} href={target}>
            {label}
        </a>
    );
};
