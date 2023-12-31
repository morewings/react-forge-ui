import type {ChangeEvent, FocusEvent, InputHTMLAttributes, KeyboardEvent} from 'react';

export type CallbackPropsTextual<TElement = HTMLInputElement> = {
    /**
     * Provide value for controlled TextInput.
     * Setting this prop enables controlled mode.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value
     * @see https://naspersclassifieds.atlassian.net/wiki/spaces/NDS/pages/57169350329/RFC+Nexus+Input+API#Controllable-state
     */
    value?: InputHTMLAttributes<TElement>['value'];
    /**
     * Provide value for non-controlled TextInput.
     * Setting this prop enables non-controlled mode.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value
     * @see https://naspersclassifieds.atlassian.net/wiki/spaces/NDS/pages/57169350329/RFC+Nexus+Input+API#Uncontrolled-input
     */
    defaultValue?: InputHTMLAttributes<TElement>['defaultValue'];
    /**
     * Disable input.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled
     */
    disabled?: InputHTMLAttributes<TElement>['disabled'];
    /**
     * Set on change callback to get Event object.
     * @see https://reactjs.org/docs/events.html#form-events
     */
    onChange?: (event: ChangeEvent<TElement>) => void;
    /**
     * Set on focus callback to get Event object.
     * @see https://reactjs.org/docs/events.html#onfocus
     */
    onFocus?: (event: FocusEvent<TElement>) => void;
    /**
     * Set on blur callback to get Event object.
     * @see https://reactjs.org/docs/events.html#onblur
     */
    onBlur?: (event: FocusEvent<TElement>) => void;
    /**
     * Set on key down callback to get Event object.
     * @see https://reactjs.org/docs/events.html#keyboard-events
     */
    onKeyDown?: (event: KeyboardEvent<TElement>) => void;
    /**
     * Set on key up callback to get Event object.
     * @see https://reactjs.org/docs/events.html#keyboard-events
     */
    onKeyUp?: (event: KeyboardEvent<TElement>) => void;
};

export type CallbackPropsInteractive = {
    /**
     * Provide value CheckboxInput.
     * NB! This prop is unlike TextInput and doesn't influence a state of input! Use `checked` prop for that.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes
     */
    value?: InputHTMLAttributes<HTMLInputElement>['value'];
    /**
     * Provide default checked state for non-controlled CheckboxInput.
     * Setting this prop enables non-controlled mode.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes
     * @see https://naspersclassifieds.atlassian.net/wiki/spaces/NDS/pages/57169350329/RFC+Nexus+Input+API#Uncontrolled-input
     */
    defaultChecked?: InputHTMLAttributes<HTMLInputElement>['checked'];
    /**
     * Provide checked state for controlled CheckboxInput.
     * Setting this prop enables controlled mode.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes
     * @see https://naspersclassifieds.atlassian.net/wiki/spaces/NDS/pages/57169350329/RFC+Nexus+Input+API#Controllable-state
     */
    checked?: InputHTMLAttributes<HTMLInputElement>['checked'];
    /**
     * Disable input.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled
     */
    disabled?: InputHTMLAttributes<HTMLInputElement>['disabled'];
    /**
     * Set on change callback to get Event object.
     * @see https://reactjs.org/docs/events.html#form-events
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Set on focus callback to get Event object.
     * @see https://reactjs.org/docs/events.html#onfocus
     */
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Set on blur callback to get Event object.
     * @see https://reactjs.org/docs/events.html#onblur
     */
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Set on key down callback to get Event object.
     * @see https://reactjs.org/docs/events.html#keyboard-events
     */
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Set on key up callback to get Event object.
     * @see https://reactjs.org/docs/events.html#keyboard-events
     */
    onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
};
