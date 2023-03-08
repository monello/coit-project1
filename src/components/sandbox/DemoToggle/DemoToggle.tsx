import React from "react";
import useToggle from "../../../hooks/useToggle";

export const DemoToggle = () => {
    const { value, toggle } = useToggle(false);
    const handleOnclick = () => {
        toggle(!value);
    };
    return (
        <div>
            <h2>useToggle hook</h2>
            <p>
                Clicking the toggle button below will switch (toggle) the label
                below between "VISIBLE" and "HIDDEN"
            </p>
            <button onClick={handleOnclick}>TOGGLE</button>
            <h3>{value ? "VISIBLE" : "HIDDEN"}</h3>
        </div>
    );
};
