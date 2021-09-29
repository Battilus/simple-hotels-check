import React from "react";
import style from "./auth.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {signIn, updateEmailField, updatePasswordField} from "../../redux/auth/auth-actions";


const Auth = () => {

    const userEmailField = useSelector(state => state.auth.forms.userEmail)
    const userPasswordField = useSelector(state => state.auth.forms.userPassword)
    const errors = useSelector(state => state.auth.errors);

    const dispatch = useDispatch()
    
    return (
        <div className={style.imageField}>
            <div className={style.wrapper}>
                <div className={style.authCard}>
                    <div className={style.inputFields}>
                        <div className={style.title}>Simple Hotel Check</div>
                        <div className={style.email}>
                            <div className={style.description}>Логин</div>
                            <input
                                type="Email"
                                value={userEmailField}
                                placeholder="Email"
                                autoComplete="email"
                                onChange={(e) =>
                                    dispatch(updateEmailField({email: e.target.value}))}
                            />
                            <div className={style.errorText}>{errors.email}</div>
                        </div>

                        <div className={style.password}>
                            <div className={style.description}>Пароль</div>
                            <input
                                type="password"
                                value={userPasswordField}
                                placeholder="Password"
                                autoComplete="new-password current-password"
                                onChange={(e) =>
                                    dispatch(updatePasswordField({password: e.target.value}))}
                            />
                            <div className={style.errorText}>{errors.password}</div>
                        </div>
                            <button type="button"
                                onClick={() => {
                                    dispatch(signIn({
                                        userEmail: userEmailField,
                                        userPassword: userPasswordField
                                    }));
                                }}>Sign in</button>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Auth;