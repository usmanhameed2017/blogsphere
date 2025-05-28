import React from 'react';
import { Formik } from 'formik';

function FormBS({ children, initialValues, validationSchema, handlerFunction })
{
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handlerFunction}>
                { children }
            </Formik>
        </div>
    );
}

export default FormBS;