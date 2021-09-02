
export const validateUserdata = (userdata) => {
    let status = {
        errors:{
            email: '',
            password: ''
        },
        isValid: false,
    };

    let emailIsValid = false;
    let passwordIsValid = false;

    if (!userdata.email) {
        status.errors.email = 'Email is required';
        emailIsValid = false;
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userdata.email)
    ) {
        status.errors.email = 'Invalid email address';
        emailIsValid = false;
    } else {
        status.errors.email = '';
        emailIsValid = true;
    }

    if (!userdata.password) {
        status.errors.password = 'Password is required'
        passwordIsValid = false;
    } else if (
        !/[0-9a-zA-Z!@#$%*()_+^&]*$/.test(userdata.password)) {
        status.errors.password = 'Invalid password symbols';
        passwordIsValid = false;
    } else if (
        !/(?=^.{8,}$)/.test(userdata.password)) {
        status.errors.password = 'Password less than 8 characters'
        passwordIsValid = false;
    } else if (/[а-яё]/i.test(userdata.password)) {
        status.errors.password = 'Invalid password symbols';
        passwordIsValid = false;
    }
     else {
        status.errors.password = '';
        passwordIsValid = true;
    }

    status.isValid = (passwordIsValid && emailIsValid);

    return status;
}