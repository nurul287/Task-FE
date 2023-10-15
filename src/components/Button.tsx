import React, {forwardRef } from 'react';

enum ButtonSizePaddingHorizontalMap {
    'sm' = 'h-[25px] px-2 text-[10px]',
    'md' = 'h-[30px] px-3 text-[13px]',
    'lg' = 'h-[35px] px-4 text-sm',
}

enum ButtonColorMap {
    'primary' = 'bg-primary hover:bg-primary-hover',
    'disabled' = 'bg-disabled',
    'info' = 'bg-info',
}

export interface ButtonProps {
    size?: 'sm' | 'lg' | 'md';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    id?: string;
    children: string;
    color?:
    | 'primary'
    | 'disabled'
    | 'info';
}


const Button = forwardRef<HTMLButtonElement | null, ButtonProps>(
    (
        {
            size = 'lg',
            onClick,
            disabled = false,
            color = 'primary',
            className,
            id,
            children
        },
        ref
    ) => {

        return (
            <button
                className={`m-1 ${ButtonSizePaddingHorizontalMap[size]
                    } focus-ring-1 focus-visible-ring-1 focus-ring-black whitespace-nowrap text-white ${!disabled && ButtonColorMap[color]} ${disabled && 'bg-disabled cursor-not-allowed text-disabledtext'
                    } ${className || ''}`}
                onClick={!disabled ? onClick : undefined}
                ref={ref}
                tabIndex={0}
                id={id}
            >
                {children}
            </button>
        );
    }
);

export default Button;
