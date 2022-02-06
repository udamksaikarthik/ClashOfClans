console.log('Im Working')

const about = document.getElementById('about')
const contact = document.getElementById('contact_details')

function aboutDetails(){
    about.classList.toggle('active')
}
function contactDetails(){
    contact.classList.toggle('active')
}