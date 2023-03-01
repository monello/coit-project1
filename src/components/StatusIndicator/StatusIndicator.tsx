import { useEffect, useState } from "react";
import "./StatusIndicator.css";

export type StatusVariant = "pending" | "in-progress" | "impeded" | "done";

export interface Status {
    variant: StatusVariant;
    label: string;
}

interface StatusIndicatorProps extends Status {
    handleStatusChange: (
        event: React.MouseEvent<HTMLAnchorElement>,
        variant: StatusVariant
    ) => Promise<any>;
}

export const StatusIndicator = ({
    variant,
    label,
    handleStatusChange,
}: StatusIndicatorProps) => {
    const [visibilityClass, setVisibilityClass] = useState("");
    const [statuses, setStatuses] = useState<Status[]>([]);
    useEffect(() => {
        fetch("http://localhost:3500/statuses")
            .then((response) => response.json())
            .then((data) => {
                setStatuses(data);
            });
    }, []);

    const onClickStatus = () => {
        setVisibilityClass(visibilityClass === "show" ? "" : "show");
    };
    return (
        <div className="dropdown">
            <button className={`status ${variant}`} onClick={onClickStatus}>
                {label}
                <i>&#9998;</i>
            </button>
            <div className={`dropdown-content ${visibilityClass}`}>
                {statuses.map((status) => (
                    <a
                        key={status.variant}
                        href="/"
                        onClick={(event) => {
                            handleStatusChange(event, status.variant).then(
                                () => {
                                    setVisibilityClass("");
                                }
                            );
                        }}
                    >
                        {status.label}
                    </a>
                ))}
            </div>
        </div>
    );
};
