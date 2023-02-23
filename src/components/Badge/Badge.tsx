import "./Badge.css";

interface BadgeProps {
    text: string;
    textColour?: "black" | "white";
    backgroundColour?: "green" | "red" | "orange" | "blue" | "grey";
}

export const Badge = ({ text, textColour, backgroundColour }: BadgeProps) => {
    const badgeClass = `badge ${backgroundColour || "white"}`;
    const textClass = textColour || "grey";
    return (
        <div className={badgeClass}>
            <span className={textClass}>{text}</span>
        </div>
    );
};
