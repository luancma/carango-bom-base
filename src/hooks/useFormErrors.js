import { useState } from 'react';

function useFormErrors(validations) {

    const initalState = createInitialErrorsState(validations);

    const [errors, setErrors] = useState(initalState);

    function validFields(event) {
        const { name, value } = event.target;
        const newState = { ...errors };
        newState[name] = validations[name](value);
        setErrors(newState);
    }

    function canSend() {
        for (let field in errors) {
            if (!errors[field].isValid) {
                return false;
            }
        }

        return true;
    }

    return [errors, validFields, canSend];
}

function createInitialErrorsState(validations) {
    const initialState = {};
    for (let field in validations) {
        initialState[field] = { isValid: true, text: "" };
    }

    return initialState;
}

export default useFormErrors;