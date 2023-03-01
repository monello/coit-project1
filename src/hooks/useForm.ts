import { useState } from "react";

/* https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh */
export const useForm = <T,>(callback: () => Promise<any>, initialState: T) => {
    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        onSelectChange,
        onSubmit,
        values,
    };
};
