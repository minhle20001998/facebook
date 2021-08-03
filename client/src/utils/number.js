export function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export function validateEmailOrPhone(email_or_phone) {
    return isNumeric(email_or_phone) ? { phoneNumber: email_or_phone } : { email: email_or_phone };
}
