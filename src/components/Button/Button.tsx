import React, { HTMLProps } from "react";

import "./Button.css";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    variant: "cta" | "hero";
}

export const Button = ({ variant, onClick, children }: ButtonProps) => {
    return (
        <button className={variant} onClick={onClick}>
            {children}
        </button>
    );
};
