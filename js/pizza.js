 const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get selected values from the formconst dough = document.querySelector('input[name="dough"]:checked').value;const cheeses = Array.from(document.querySelectorAll('input[name="cheese"]:checked')).map(checkbox => checkbox.value);const sauce = document.querySelector('input[name="sauce"]:checked').value;const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(checkbox => checkbox.value);
    // Create pizza object
    const pizza = {
        dough: dough,
        cheese: cheeses,
        sauce: sauce,
        toppings: toppings,
        toString: function() {
            return `You have ordered a pizza with a ${this.dough} base, with ${this.cheese.join(", ")} as your cheese(s), ${this.sauce} for your sauce, and ${this.toppings.join(", ")} as your toppings.`;
        }
    };

    // create a string for the output
    let p = `<p id=output> ${pizza.toString()}</p>`;

    // set the output string as the innerHTML of the section
    document.querySelector('section').innerHTML = p;
});
