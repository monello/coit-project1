import React from "react";
import { DemoDebounce } from "../../components/sandbox/DemoDebounce";
import { DemoToggle } from "../../components/sandbox/DemoToggle/DemoToggle";

export const SandBox = () => {
    return (
        <div>
            <h1>Sandbox</h1>
            <DemoDebounce />
            <DemoToggle />
        </div>
    );
};
