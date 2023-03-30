
export default function contactUsModule() {
  const content = document.getElementById('content')
  const contactUs = document.createElement('div')
  contactUs.classList.add('contact-us')
  const form = document.createElement('form')
  const adress = document.createElement('p')
  adress.innerText = `Our adress is: 1450 Dragonfire Boulevard, Suite 101, Mystic Falls, CA 90210.`
  const phone = document.createElement('p')
  phone.innerText = `Our contact  phone number is: +1 (555) 777-8888`
  const email = document.createElement('input')
  email.id = 'email'
  const emailLabel = document.createElement('label')
  emailLabel.htmlFor = 'email'
  emailLabel.innerText = 'Your email'
  email.type = 'email'
  email.required = true;
  const textarea = document.createElement('textarea')
  textarea.cols = 50
  textarea.rows = 20
  const submit = document.createElement('button')
  submit.type = 'submit'
  submit.innerText = 'Send'
  const header = document.createElement('h2')
  header.innerText = `You can also leave a message below!`
  form.append(header,emailLabel,email,textarea,submit)
  contactUs.append(phone,adress,form)
  content.append(contactUs)
}
