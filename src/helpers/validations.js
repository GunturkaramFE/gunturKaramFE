export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Mobile Number Validation
  export function isValidMobileNumber(mobileNumber) {
    // Assumes a simple 10-digit mobile number
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobileNumber);
  }
  
  // Password Validation
 export  function isValidPassword(password) {
    // Requires at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }