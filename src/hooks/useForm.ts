import { useState } from "react";

type OnChangeElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/* https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh */
export const useForm = <T>(callback: () => Promise<any>, initialState: T) => {
    const [values, setValues] = useState(initialState);

    const onChange = <U extends OnChangeElements>(event: React.ChangeEvent<U>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
        setValues(initialState);
    };

    return {
        onChange,
        onSubmit,
        values,
    };
};
