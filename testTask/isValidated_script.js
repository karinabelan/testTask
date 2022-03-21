function isValidated(executionContext)
{
    var formContext = executionContext.getFormContext();
    var phone = formContext.getAttribute("kb_telephone").getValue();
    const RE = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    alert (RE.test(phone))

}
//123-345-3456-true