import { MouseEventHandler } from 'react';

export interface InputProps {
    type: 'default' | 'error' | 'focus';
    onInput: MouseEventHandler<HTMLInputElement>;
}