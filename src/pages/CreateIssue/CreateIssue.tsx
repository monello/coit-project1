import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { StatusVariant } from "../../components";
import { Status } from "../../components";

import "./CreateIssue.css";

interface Issue {
    id?: number;
    heading: string;
    description: string;
    tags: string;
    status: StatusVariant;
}

export const CreateIssue = () => {
    const navigate = useNavigate();
    const [statuses, setStatuses] = useState<Status[]>([]);
    const [buttonEnabled, setButtonEnabled] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3500/statuses")
            .then((response) => response.json())
            .then((data) => {
                setStatuses(data);
            });
    }, []);

    // defining the initial state for the form
    const initialState: Issue = {
        heading: "",
        description: "",
        tags: "",
        status: "pending",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSelectChange, onSubmit, values } = useForm(
        createTicketCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function createTicketCallback() {
        setButtonEnabled(false);
        fetch("http://localhost:3500/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.id) {
                    navigate("/", { replace: true });
                } else {
                    throw new Error("data was not successfully saved");
                }
            })
            .catch((err) => {
                setButtonEnabled(true);
                console.error("Error creating a new ticket:", err);
            });
    }

    return (
        // don't mind this ugly form :P
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>Create a new ticket</legend>
                <div className="field">
                    <label>
                        Heading:
                        <br />
                        <input
                            name="heading"
                            id="heading"
                            type="text"
                            value={values.heading}
                            placeholder="Enter a heading"
                            onChange={onChange}
                            required
                        />
                    </label>
                </div>
                <div className="field">
                    <label>
                        Description:
                        <br />
                        <input
                            name="description"
                            id="description"
                            type="text"
                            value={values.description}
                            placeholder="Enter a description"
                            onChange={onChange}
                            required
                        />
                    </label>
                </div>
                <div className="field">
                    <label>
                        Tags:
                        <br />
                        <input
                            name="tags"
                            id="tags"
                            type="text"
                            value={values.tags}
                            placeholder="Comma separated tags"
                            onChange={onChange}
                            required
                        />
                    </label>
                </div>
                <div className="field">
                    <label>
                        Status:
                        <br />
                        <select
                            name="status"
                            id="status"
                            onChange={onSelectChange}
                            defaultValue={values.status}
                        >
                            {statuses.map(({ variant, label }) => (
                                <option key={variant} value={variant}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="cta">
                    <button
                        className={`create ${!buttonEnabled && "disabled"}`}
                        type="submit"
                        disabled={!buttonEnabled}
                    >
                        Create Ticket
                    </button>
                </div>
            </fieldset>
        </form>
    );
};
