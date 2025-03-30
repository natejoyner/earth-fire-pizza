(function(){

    const form = document.querySelector('#mc-embedded-subscribe-form');
    const inputName = form.querySelector('[type="text"]');
    const inputEmail = form.querySelector('[type="email"]');
    const formSubmit = form.querySelector('[type="submit"]');

    /**
     *  BEFORE submitting form:
     *    + initially disable button before filling out form.
     *    + check to see if inputs are empty or filled in.
     *    + display error message if inputs are not filled in correctly
     *    + if everything is good, allow button to send form!
     **/

    form.addEventListener("input", (event) => {
        console.log("Get some live form action!");

        validateForm();

        // check input values 

        // use validity api to check BOTH input values are valid.
        // if one or more values are invalid do not allow form to send.
    
        if (inputName.validity.valid && inputEmail.validity.valid) {
            // activate button for launch!
            formSubmit.removeAttribute('disabled');
            formSubmit.ariaDisabled = 'false';

             // if we have any screen reader error messages remove/change them.
        
        } else {
            // one or more values are invalid do not allow form to send.
            console.log("input fields invalid");
            
            // make sure button is disabled. 
            formSubmit.ariaDisabled = 'true';
            formSubmit.setAttribute('disabled', '');

            // loop throu each input and check if valid
            // if not valid build error message and insert into <span> el.
            // if we have a valid input value on any input remove/change message.
        }

    });

}());