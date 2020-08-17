import react, { useState } from 'react';

function useFormik({
    initialValues
}) {

    const [values, setValues] = useState(initialValues);
    function handleChange(event) {
        const fieldNome = event.target.getAttribute('nome');
        const value = event.target.value;
        setValues({
            ...values,
           [fieldNome]: value,
        });
    }
    return {
        values,
        handleChange
    }
}

export default useFormik;