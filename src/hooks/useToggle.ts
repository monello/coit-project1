import { useState } from "react";

// export const useToggle = (default: boolean) => {
//     const [value, setValue] = useState<boolean>()
// }

export default function useToggle(defaultValue: boolean) {
    const [value, setValue] = useState<boolean>(defaultValue);

    function toggle(value: boolean) {
        setValue(value);
    }

    return { value, toggle };
}
