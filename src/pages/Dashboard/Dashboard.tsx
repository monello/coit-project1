import { useEffect, useState } from "react";
import { Card } from "../../components";

import { CardProps } from "../../components";

export const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        const url = `http://localhost:3500/cards`;
        fetch(url, {
            method: `GET`,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCards(data);
                setError("");
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(`There was an error loading the cards: ${error}`);
            });
    }, []);

    return (
        <>
            {!!error && <>{error}</>}
            {isLoading && <>Loading cards ... </>}
            {cards.length > 0 &&
                cards.map((card) => <Card key={card.id} {...card} />)}
            {!error && !isLoading && cards.length === 0 && (
                <>
                    There are currently no ticket to load. Click "Create Ticket"
                    above to start.
                </>
            )}
        </>
    );
};
