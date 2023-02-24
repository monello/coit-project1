import { Badge } from "../Badge";
import { Selector } from "../Selector";
import "./Product.css";

type Colour = "green" | "blue" | "orange" | "pink" | "black" | "white";

export interface ProductProps {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
    price: number;
    saving?: number;
    color?: string;
    colors?: Colour[];
}

export const Product = ({
    id,
    title,
    description,
    imgSrc,
    price,
    saving,
    color,
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
                    <a href={`/${id}`}>
                        <img src={imgSrc} alt={title} width="450px" />
                    </a>
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>
                    <span className={!!saving ? "discounted" : ""}>
                        ${price}
                    </span>
                    {!!saving && "$" + discountedPrice}
                </p>
                <div className="colors-container">
                    {!!colors &&
                        colors.map((itemColor) => (
                            <Selector
                                key={itemColor}
                                color={itemColor}
                                selected={color === itemColor}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};
