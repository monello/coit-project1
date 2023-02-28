import "./Tag.css";

interface TagProps {
    name: string;
}

export const Tag = ({ name }: TagProps) => {
    return <div className="tag">{name}</div>;
};
