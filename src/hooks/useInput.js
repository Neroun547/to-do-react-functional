import { useState } from 'react';
//So i try do customs hooks...
export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const reset = () => {
        setValue(initialValue);
    }
    const bind = {
        value,
        onChange:e => {
            setValue(e.target.value);
        }
    }

    return [value, bind, reset];
}
