import React, {useEffect} from "react";
import style from "./authorization.module.scss"


const Authorization = (props) => {

    let {
        userEmail,
        userPassword,
        errors,
        // loggedIn,
        updateEmailField,
        updatePasswordField,
        signIn
    } = props;


    useEffect(() => {
        // if (loggedIn) console.log('is valid');
    });


    const callUpdateUserEmail = (e) => {
        updateEmailField(e.target.value);
    }

    const callUpdateUserPassword = (e) => {
        updatePasswordField(e.target.value);
    }

    const callSingIn = () => {
        signIn();
    }

    return (
        <div className={style.wrapper}>
            <div className={style.imageField}>
                <div className={style.inputField}>
                    <input
                        type="Email"
                        placeholder="Email"
                        value={userEmail}
                        onChange={callUpdateUserEmail}
                    />
                    <span>{errors.email}</span>

                    <input
                        type="password"
                        placeholder="Password"
                        value={userPassword}
                        onChange={callUpdateUserPassword}
                    />
                    <span>{errors.password}</span>

                    <button onClick={callSingIn}>Sign in</button>
                </div>
            </div>
        </div>
    )
}


export default Authorization;