import { Card } from "../../components";

import { CardProps } from "../../components";

const cards: CardProps[] = [
    {
        id: 1,
        heading: "Ticket 1",
        description: "Ticket 1 description",
        tags: ["tag1", "tag2", "tag3"],
        status: "Pending",
    },
    {
        id: 2,
        heading: "Ticket 2",
        description: "Ticket 2 description",
        tags: ["tag1", "tag2", "tag3"],
        status: "In Progress",
    },
    {
        id: 3,
        heading: "Ticket 3",
        description: "Ticket 3 description",
        tags: ["tag1", "tag2", "tag3"],
        status: "Impeded",
    },
    {
        id: 4,
        heading: "Ticket 4",
        description: "Ticket 4 description",
        tags: ["tag1", "tag2", "tag3"],
        status: "Done",
    },
];

export const Dashboard = () => {
    return (
        <>
            {cards.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </>
    );
};
