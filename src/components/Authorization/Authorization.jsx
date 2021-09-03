import React from "react";
import style from "./authorization.module.scss"


const Authorization = (props) => {

    let {
        errors,
        emailIsValid,
        passwordIsValid,
        // loggedIn,
        signIn
    } = props;


    let userEmailDat = React.createRef();
    let userPasswordDat = React.createRef();

    const callSingIn = () => {
        signIn({
            userEmail: userEmailDat.current.value,
            userPassword: userPasswordDat.current.value
        });
    }

    return (
        <div className={style.wrapper}>
            <div className={style.imageField}>
                <div className={style.inputField}>
                    <input
                        type="Email"
                        placeholder="Email"
                        autoComplete="on"
                        ref={userEmailDat}
                    />
                    {!emailIsValid ? <span>{errors.email}</span> : null}

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


export default Authorization;