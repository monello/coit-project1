import { Shop } from "./components/Shop/Shop";
import "./App.css";

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
                <Shop />
            </main>
        </div>
    );
}

export default App;
