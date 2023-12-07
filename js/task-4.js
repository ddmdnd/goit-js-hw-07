const formReg = document.querySelector(".login-form");
const sendForm = (event) => {
    event.preventDefault();
    const form = event.target;
    if(form.email.value === "" || form.password.value === "") {
      alert ('All form fields must be filled in')
    } else {
      const customer = {
        [form.email.name] : `${form.email.value.trim()}`,
        [form.password.name] : `${form.password.value.trim()}`,
      };
      console.log(customer)
    }
    form.reset()
  }
  formReg.addEventListener("submit", sendForm);
