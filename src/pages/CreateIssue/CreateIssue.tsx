import { useForm } from "../../hooks/useForm";

import { StatusVariant } from "../../components";

import "./CreateIssue.css";

interface Issue {
    id?: number;
    heading: string;
    description: string;
    tags: string;
    status: StatusVariant;
}

export const CreateIssue = () => {
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
        values.id = Math.floor(Math.random() * 10000);
        // send "values" to database
        console.log("Creating Ticket as:", values);
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
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="impeded">Impeded</option>
                            <option value="done">Done</option>
                        </select>
                    </label>
                </div>
                <div className="cta">
                    <button className="create" type="submit">
                        Create Ticket
                    </button>
                </div>
            </fieldset>
        </form>
    );
};
