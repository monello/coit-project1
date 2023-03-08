import React, { useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

export const DemoDebounce = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    useDebounce(() => setOutput(input), 1000, [input]);

    const handleChanged = (e: any) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <h2>useDebounce hook</h2>
            <p>
                When you type text in the input box, the output box will only
                update if you stop typing for 1 second
            </p>
            <label>
                Input:
                <br />
                <input
                    type="text"
                    name="foo"
                    id="foo"
                    value={input}
                    onChange={handleChanged}
                />
            </label>
            <fieldset>
                <legend>Output</legend>
                <p>{output}</p>
            </fieldset>
        </div>
    );
};
