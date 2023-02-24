import { Shop } from "./components/Shop/Shop";
import { NavContainer, NavItems } from "./components/NavContainer/NavContainer";
import "./App.css";

const navigationItems: NavItems = {
    left: [
        { label: "Shop All +", href: "/shop" },
        { label: "Cookware", href: "/cookware" },
        { label: "Bakeware", href: "/baskeware" },
        { label: "Sets on Sale", href: "/sale" },
    ],
    right: [
        { label: "Ingredients", href: "/ingredients" },
        { label: "Recipes +", href: "/recipes" },
        { label: "About", href: "/baskeware" },
        { label: "Account", href: "/account" },
    ],
};

function App() {
    return (
        <div className="App flex-container">
            <header id="header" className="flex-item">
                <p>Free shipping $100+, 60-day trial, free returns</p>
            </header>
            <nav className="flex-item">
                <NavContainer {...navigationItems} />
            </nav>
            <section id="hero-block" className="flex-item">
                Hero Block Here
            </section>
            <section id="brand-container" className="flex-item">
                Tagline Block Here
            </section>
            <main id="shop-container" className="flex-item">
                <Shop />
            </main>
        </div>
    );
}

export default App;
