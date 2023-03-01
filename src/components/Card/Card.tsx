import { Tag } from "../Tag";
import { Status, StatusIndicator } from "../StatusIndicator";

import "./Card.css";

export interface CardProps {
    id: number;
    heading: string;
    description: string;
    tags: string[];
    status: Status;
}

export const Card = ({ heading, description, tags, status }: CardProps) => {
    return (
        <div className="card">
            <h2>{heading}</h2>
            <p className="description">{description}</p>
            <div className="tags-container">
                {tags.map((tag, index) => (
                    <Tag key={index} name={tag} />
                ))}
            </div>
            <StatusIndicator {...status} />
        </div>
    );
};
