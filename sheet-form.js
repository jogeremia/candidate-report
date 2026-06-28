const scriptURL = 'https://script.google.com/macros/s/AKfycbwhMAls8xvTRDCzplRWgk3myi6PI4tBOsRy22wveO2x7Mz3nMhFctzfNhFAGNqwZUcOWQ/exec' /*this const creates the script url which is the deployment link for the app script*/

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your candidate report has been created successfully!"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})

/*https://www.youtube.com/watch?v=jdIntB1J-i8
above is the Youtube video I ripped this code from :3

another video I ripped this from lol
https://www.youtube.com/watch?v=V5g9jneL_hQ
*/