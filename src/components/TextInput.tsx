import React, { ChangeEvent, RefObject } from 'react';

interface IInputProps {
    id?: string;
    title?: string;
    placeholder?: string | undefined;
    value?: string | undefined;
    width?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    defaultValue?: string;
    inputRef?: RefObject<HTMLInputElement>;
}

const TextInput: React.FC<IInputProps> = ({
    id,
    title,
    placeholder,
    width,
    value,
    disabled,
    inputRef,
    onChange,
    defaultValue,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }
    return (
        <div style={{ width }} className='flex gap-2 mt-2 items-center'>
            <label className=" text-sm" htmlFor="search-input">
                {title}:
            </label>
            <input
                id={id}
                ref={inputRef}
                className="border-solid border border-gray-600 rounded p-1 text-sm focus:outline-none"
                type="text"
                disabled={disabled}
                name="search-input"
                defaultValue={defaultValue}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextInput;
