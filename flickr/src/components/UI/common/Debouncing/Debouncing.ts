import {useState, useEffect} from 'react';

export const Debouncing = (value: string, delay: number) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        debugger
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value])

    return debouncedValue
};