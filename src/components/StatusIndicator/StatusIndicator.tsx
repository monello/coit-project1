import "./StatusIndicator.css";

export type StatusVariant = "pending" | "in-progress" | "impeded" | "done";

export interface Status {
    variant: StatusVariant;
    label: string;
}

interface StatusIndicatorProps extends Status {}

export const StatusIndicator = ({ variant, label }: StatusIndicatorProps) => {
    return <div className={`status ${variant}`}>{label}</div>;
};
