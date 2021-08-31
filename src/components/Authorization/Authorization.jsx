import React from "react";
import style from "./authorization.module.scss"
import {Formik} from "formik";


const Authorization = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.imageField}>
                <Formik
                    initialValues={
                        {
                            email: '',
                            password: ''
                        }
                    }
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Email is required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'Password is required'
                        } else if (
                            !/[0-9a-zA-Z!@#$%*()_+^&]*$/.test(values.password)
                        ) {
                            errors.password = 'Invalid password symbols';
                        } else if (
                            !/(?=^.{8,}$)/.test(values.password)
                        ) {
                            errors.password = 'Password less than 8 characters'
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form className={style.inputField}
                              onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <button type="submit" disabled={isSubmitting}>
                                Sign in
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}


export default Authorization;