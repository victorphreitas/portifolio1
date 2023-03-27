//AOS library to animate the page
const options = {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
}

AOS.init(options);

//grab the buttons to send the user to the projects 
const buttons = document.querySelectorAll('.btn-project');

const visitProject = event => {
    const btnAttribute = event.target.getAttribute('id')
    if (btnAttribute === 'sexy') {
        window.open("https://victorphreitas.github.io/SexyCanvas/")
    } else if (btnAttribute === 'infinite'){
        window.open("https://victorphreitas.github.io/infiniteScroller/")
    } else if (btnAttribute === 'navigation') {
        window.open("https://victorphreitas.github.io/navigationProject/")  
    } else if (btnAttribute === 'quote') {
        window.open("https://www.catiadespachante.com.br/")
    }
}

buttons.forEach(btn => {btn.addEventListener('click', visitProject)})


//Email js library goes here
let sent = false
window.onload = function() {
    document.getElementById('contact_form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_3rzk32a', 'contact_form', this)
            .then(function() {
                //create a div in the page to show this message in a better way 
                // alert("Email enviado com sucesso!")
                Swal.fire(
                    'Your feedback was sent successfully!',
                    'Check your inbox!',
                    'success')
                  
                document.querySelector("textarea").value
                //deleting name, email and textarea field
                setTimeout(()=>{
                    document.querySelector("textarea").value = ''
                    document.querySelector("input[name='user_name']").value = ''
                    document.querySelector("input[type='email']").value = ''
                },100)
            }, function(error) {
                //create a div in the page to show this message in a better way 
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Try filling up all fields.</a>'
                  })
                sent = true
            });
        });
  }

  const inputUserName = document.querySelector('.user_name')

  console.log(inputUserName.value)




  
