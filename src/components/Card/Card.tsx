import { Tag } from "../Tag";
import { Status, StatusIndicator, StatusVariant } from "../StatusIndicator";

import "./Card.css";
import { useEffect, useState } from "react";

export interface CardProps {
    id: number;
    heading: string;
    description: string;
    tags: string;
    status: StatusVariant;
}

export const Card = ({ heading, description, tags, status }: CardProps) => {
    const [statuses, setStatuses] = useState<Status[]>([]);
    useEffect(() => {
        fetch("http://localhost:3500/statuses")
            .then((response) => response.json())
            .then((data) => {
                setStatuses(data);
            });
    }, []);

    const handleStatusChange = (
        event: React.MouseEvent<HTMLAnchorElement>,
        variant: StatusVariant
    ) => {
        event.preventDefault();
        console.log(
            `This should change the status to ${variant}, but I don't know how`
        );
        const promise = new Promise((resolve) => {
            resolve(true);
        });
        return promise;
    };

    const tagsList = tags.split(",");
    const statusProps = statuses.find((item) => item.variant === status);
    return (
        <div className="card">
            <h2>{heading}</h2>
            <p className="description">{description}</p>
            <div className="tags-container">
                {tagsList.map((tag, index) => (
                    <Tag key={index} name={tag} />
                ))}
            </div>
            {!!statusProps && (
                <StatusIndicator
                    {...statusProps}
                    handleStatusChange={handleStatusChange}
                />
            )}
        </div>
    );
};
