import React, { ChangeEvent, FunctionComponent, HTMLProps } from 'react';

import './form-input.styles.scss';

interface FormInputProps extends HTMLProps<HTMLInputElement> {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FunctionComponent<FormInputProps> = ({ handleChange, label, ...props }) => (
    <div className="group">
        <input type='text' className='form-input' onChange={handleChange} {...props} />
        {label ? (
            <label htmlFor='' className={`${props.value ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
        ) : null}
    </div>
);

export default FormInput
