import clsx from 'clsx';
import { ComponentProps } from 'react';
import { variants, type ButtonVariants } from './button-variants';


export type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
    // if (!variant) variant = 'primary';

    // if (!size) size = 'small'
    const classes = clsx(variants({ variant, size }), className);

    return <button {...props} className={classes} />
}