import React from 'react';
import tokens from '../../design-tokens/build/tokens.js';
import '../../design-tokens/build/variables.scss';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({
    variant = 'primary',
    children,
    onClick
}: ButtonProps) => {
    // Get the color value from tokens
    const getColor = () => {
        switch (variant) {
            case 'primary':
                return tokens.color.brand.primary.value;
            case 'secondary':
                return tokens.color.brand.secondary.value;
            case 'tertiary':
                return tokens.color.brand.tertiary.value;
            default:
                return tokens.color.brand.primary.value;
        }
    };

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: getColor(),
                color: tokens.color.text.default.value,
                padding: `${tokens.spacing.sm.value} ${tokens.spacing.md.value}`,
                fontFamily: tokens.font.family.body.value,
                fontSize: tokens.font.size.base.value,
                fontWeight: tokens.font.weight.medium.value,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
            }}
        >
            {children}
        </button>
    );
};

export default Button; 