
export const validateUserdata = (userdata) => {
    let status = {
        errors:{
            email: '',
            password: ''
        },
        emailIsValid: false,
        passwordIsValid: false,
        isValid: false,
    };

    if (!userdata.email) {
        status.errors.email = 'Email is required';
        status.emailIsValid = false;
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userdata.email)
    ) {
        status.errors.email = 'Invalid email address';
        status.emailIsValid = false;
    } else {
        status.errors.email = '';
        status.emailIsValid = true;
    }

    if (!userdata.password) {
        status.errors.password = 'Password is required'
        status.passwordIsValid = false;
    } else if (
        !/[0-9a-zA-Z!@#$%*()_+^&]*$/.test(userdata.password)) {
        status.errors.password = 'Invalid password symbols';
        status.passwordIsValid = false;
    } else if (
        !/(?=^.{8,}$)/.test(userdata.password)) {
        status.errors.password = 'Password less than 8 characters'
        status.passwordIsValid = false;
    } else if (/[а-яё]/i.test(userdata.password)) {
        status.errors.password = 'Invalid password symbols';
        status.passwordIsValid = false;
    }
     else {
        status.errors.password = '';
        status.passwordIsValid = true;
    }

    status.isValid = (status.passwordIsValid && status.emailIsValid);

    return status;
}