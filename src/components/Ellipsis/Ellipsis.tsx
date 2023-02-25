interface Props {
    text: string;
    maxLength: number;
}

export const Ellipsis: React.FC<Props> = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
        return <>{text}</>;
    }

    const ellipsedText = text.slice(0, maxLength) + "...";
    return <>{ellipsedText}</>;
};
