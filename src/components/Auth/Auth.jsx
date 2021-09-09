import React from "react";
import style from "./auth.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../redux/auth/auth-actions";


const Auth = () => {

    let errors = useSelector(state => state.auth.errors);
    let emailIsValid = useSelector(state => state.auth.emailIsValid);
    let passwordIsValid = useSelector(state => state.auth.passwordIsValid);

    const dispatch = useDispatch()

    let userEmailDat = React.createRef();
    let userPasswordDat = React.createRef();

    const callSingIn = () => {
        dispatch(signIn({
            userEmail: userEmailDat.current.value,
            userPassword: userPasswordDat.current.value
        }));
    }

    return (
        <div className={style.wrapper}>
            <div className={style.imageField}>
                <div className={style.inputField}>
                    <div className={style.description}>Логин</div>
                    <input
                        type="Email"
                        placeholder="Email"
                        autoComplete="on"
                        ref={userEmailDat}
                    />
                    {!emailIsValid ? <span>{errors.email}</span> : null}

                    <div className={style.description}>Пароль</div>
                    <input
                        type="password"
                        placeholder="Password"
                        autoComplete="on"
                        ref={userPasswordDat}
                    />
                    {!passwordIsValid ? <span>{errors.password}</span> : null}

                    <button onClick={callSingIn}>Sign in</button>
                </div>
            </div>
        </div>
    )
}


export default Auth;