import "./Selector.css";

interface SelectorProps {
    color: string;
    selected: boolean;
}

export const Selector = ({ color, selected }: SelectorProps) => {
    return (
        <button className={`selector ${color} ${selected && "selected"}`}>
            <div className="selector-inner"></div>
        </button>
    );
};
