import type {ChangeEvent, FC} from 'react';
import {forwardRef, useState, useCallback} from 'react';
import classNames from 'classnames';

import {IconError, IconValid, IconLoader} from '@/internal/Icons';
import type {DataAttributes, LibraryProps} from '@/internal/LibraryAPI';
import type {NativePropsTextual, CallbackPropsTextual} from '@/internal/inputs';
import {Validation, defaultValidator, useValidation} from '@/internal/inputs';

import classes from './InputText.module.css';

type Props = DataAttributes &
    LibraryProps &
    NativePropsTextual &
    CallbackPropsTextual & {
        type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';
        prefix?: FC;
        validatorFn?: (value: unknown) => string;
    };

export const InputText = forwardRef<HTMLInputElement, Props>(
    (
        {
            prefix: Prefix,
            className,
            type = 'text',
            placeholder = '',
            disabled,
            value: valueProp,
            onChange = () => {},
            onFocus = () => {},
            onBlur = () => {},
            onKeyDown = () => {},
            onKeyUp = () => {},
            defaultValue,
            validatorFn = defaultValidator,
            ...nativeProps
        },
        ref
    ) => {
        const [validity, setValidity] = useState<keyof typeof Validation | null>(null);
        const ValidationIcon = {
            [Validation.error]: IconError,
            [Validation.valid]: IconValid,
            [Validation.inProgress]: IconLoader,
        }[validity!];
        const {validateInputTextual} = useValidation({validatorFn, setValidity});
        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                // const nextValidationState = event.target.reportValidity() ? Validation.valid : Validation.error;
                // setValidity(nextValidationState);
                onChange(event);
            },
            [onChange]
        );
        return (
            <div className={classNames(classes.wrapper, className)}>
                {Prefix && <Prefix />}
                <input
                    {...nativeProps}
                    placeholder={placeholder}
                    className={classes.input}
                    ref={ref}
                    disabled={disabled}
                    type={type}
                    value={valueProp}
                    defaultValue={defaultValue}
                    onChange={handleChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                    onInput={validateInputTextual}
                />
                {validity && <ValidationIcon />}
            </div>
        );
    }
);

InputText.displayName = 'InputText';
