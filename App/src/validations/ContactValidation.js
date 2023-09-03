const ContactValidation = (values) => {
    const errors = {};

    if(!values.firstName || values.firstName === ""){
        errors.firstName = "First name cannot be empty !";
    }

    if(!values.lastName || values.lastName === ""){
        errors.lastName = "Last name cannot be empty !";
    }

    if(!values.age || values.age === ""){
        errors.age = "Age cannot be empty !";
    }

    return errors
}

export default ContactValidation;
