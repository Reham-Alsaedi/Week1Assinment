const weakPasswords = ["password", "123456", "qwerty", "abc123", "letmein", "welcome"];

export function validateForm(companyName, commercialRegNum, email, phoneNumber, password, confirmPassword) {
    const errors = {};

    // Company Name Validation
    if (!companyName) {
        errors.companyName = "Company Name is required.";
    }

    // Commercial Registration Number Validation
    if (!commercialRegNum) {
        errors.commercialRegNum = "Commercial Registration Number is required.";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
        errors.email = "Invalid email format.";
    }

    // Phone Number Validation
    // Adjust regex to allow formats like (123) 456-7890 or 123-456-7890
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; 
    if (!phoneNumber) {
        errors.phoneNumber = "Phone Number is required.";
    } else if (!phoneRegex.test(phoneNumber)) {
        errors.phoneNumber = "Invalid Phone Number format. Use formats like 123-456-7890 or (123) 456-7890.";
    }

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!password) {
        errors.password = "Password is required.";
    } else if (!passwordRegex.test(password)) {
        errors.password = "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.";
    } else if (weakPasswords.includes(password.toLowerCase())) {
        errors.password = "This password is too common. Please choose a stronger password.";
    }

    // Confirm Password Validation
    if (!confirmPassword) {
        errors.confirmPassword = "Confirm Password is required.";
    } else if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
    }

    return errors;
}
