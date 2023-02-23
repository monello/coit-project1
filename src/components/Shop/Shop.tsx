import { Filter } from "../Filter/Filter";
import { Product, ProductProps } from "../Product/Product";

import "./Shop.css";

const products: ProductProps[] = [
    {
        id: 1,
        title: "Family Style",
        description: "5-Piece Set of Cookware Essentials",
        imgSrc: "./family-style.webp",
        price: 615,
        color: "green",
        colors: ["green", "blue", "orange", "pink", "black", "white"],
        saving: 120,
    },
    {
        id: 2,
        title: "The Starter Lineup",
        description: "3-Piece Set of Cookware & Bakeware for Beginners",
        imgSrc: "./starter-lineup.webp",
        price: 218,
        color: "pink",
        colors: ["pink", "green", "blue", "orange"],
        saving: 58,
    },
    {
        id: 3,
        title: "The Dutches",
        description: "6.75-Quart cast-Iron Dutch Oven",
        imgSrc: "./the-dutches.webp",
        price: 160,
        color: "blue",
        colors: ["green", "blue", "orange", "pink", "black", "white"],
    },
    {
        id: 4,
        title: "The Fry Family",
        description: '8" & 10" Ceramic Nonstick Set',
        imgSrc: "./the-fry-family.webp",
        price: 160,
        saving: 15,
        colors: [],
    },
];

const filters = [
    {
        label: "Cookware",
        target: "/cookware",
        isActive: true,
    },
    {
        label: "Bakeware",
        target: "/bakeware",
        isActive: false,
    },
    {
        label: "Sets",
        target: "/sets",
        isActive: false,
    },
    {
        label: "Sides",
        target: "/sides",
        isActive: false,
    },
    {
        label: "Pantry Pals",
        target: "/pantry-pals",
        isActive: false,
    },
];

export const Shop = () => {
    return (
        <>
            <div className="shop-filters">
                {filters.map((filter) => (
                    <Filter key={filter.label} {...filter} />
                ))}
            </div>
            <div className="shop">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </>
    );
};
