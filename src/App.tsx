import { Product, ProductProps } from "./components/Product/Product";

import "./App.css";

const products: ProductProps[] = [
    {
        title: "Family Style",
        description: "5-Piece Set of Cookware Essentials",
        imgSrc: "./family-style.webp",
        price: 615,
        colors: ["green", "blue", "orange", "pink", "black", "white"],
        saving: 120,
    },
    {
        title: "The Starter Lineup",
        description: "3-Piece Set of Cookware &amp; Bakeware for Beginners",
        imgSrc: "./starter-lineup.webp",
        price: 218,
        colors: ["pink", "green", "blue", "orange"],
        saving: 58,
    },
    {
        title: "The Dutches",
        description: "6.75-Quart cast-Iron Dutch Oven",
        imgSrc: "./the-dutches.webp",
        price: 160,
        colors: ["green", "blue", "orange", "pink", "black", "white"],
    },
    {
        title: "The Fry Family",
        description: '8" &amp; 10" Ceramic Nonstick Set',
        imgSrc: "./the-fry-family.webp",
        price: 160,
        saving: 15,
        colors: [],
    },
];

function App() {
    return (
        <div className="App flex-container">
            <header id="header" className="flex-item">
                <p>Free shipping $100+, 60-day trial, free returns</p>
            </header>
            <nav className="flex-item">Navigation here</nav>
            <section id="hero-block" className="flex-item">
                Hero Block Here
            </section>
            <section id="brand-container" className="flex-item">
                Tagline Block Here
            </section>
            <main id="shop-container" className="flex-item">
                {products.map((product) => (
                    <Product
                        title={product.title}
                        description={product.description}
                        imgSrc={product.imgSrc}
                        price={product.price}
                        colors={product.colors}
                        saving={product.saving}
                    />
                ))}
            </main>
        </div>
    );
}

export default App;
