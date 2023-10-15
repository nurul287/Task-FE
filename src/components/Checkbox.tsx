import React, { ChangeEvent, FC } from 'react';

interface CheckboxProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
}
const Checkbox: FC<CheckboxProps> = ({ label, value, onChange }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    }
    return (
        <label className='flex gap-1 mt-2'>
            <input
                type="checkbox"
                checked={value}
                onChange={handleChange}
            />
            {label}
        </label>
    );
}

export default Checkbox;
