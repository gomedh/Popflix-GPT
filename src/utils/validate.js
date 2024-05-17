export const checkValidateData = (email, password, name = null) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = name === null || /^[a-zA-Z\s]+$/.test(name);

    if (name !== null && (name.trim() === '' || !isNameValid)) {
        return "Invalid Name";
    }
    if (!isEmailValid) {
        return "Invalid Email ID";
    }
    if (!isPasswordValid) {
        return "Invalid Password";
    }

    return null;
};
