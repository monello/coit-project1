import { Button } from "../Button";
import "./HeroContent.css";

export const HeroContent = () => {
    return (
        <div className="hero-content">
            <h1>Introducing Glassware!</h1>
            <p>Meet Beyond Measure &amp; Spout</p>
            <Button
                variant="hero"
                onClick={() => {
                    console.log("you clicked the hero button");
                }}
            >
                Shop Now
            </Button>
        </div>
    );
};
