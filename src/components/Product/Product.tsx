import { Badge } from "../Badge/Badge";
import "./Product.css";

type Colour = "green" | "blue" | "orange" | "pink" | "black" | "white";

export interface ProductProps {
    title: string;
    description: string;
    imgSrc: string;
    price: number;
    saving?: number;
    colors?: Colour[];
}

export const Product = ({
    title,
    description,
    imgSrc,
    price,
    saving,
    colors,
}: ProductProps) => {
    const discountedPrice = saving ? price - saving : 0;
    return (
        <>
            <div className="product">
                <div className="product-top">
                    {!!saving && (
                        <Badge
                            text={`Save $${saving}`}
                            textColour="white"
                            backgroundColour="green"
                        />
                    )}
                    <a href="/">
                        <img src={imgSrc} alt={title} width="450px" />
                    </a>
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>
                    {!!saving && "$" + discountedPrice} ${price}
                </p>
                <div>{!!colors && colors?.join(" ")}</div>
            </div>
        </>
    );
};
