import aboutModule from "./aboutUs";
import MenuModule from "./menu";
import contactUsModule from "./contactUs";

const content = document.getElementById('content')
const menuBtn = document.getElementById('Menu')
const aboutUsBtn = document.getElementById('About')
const contactBtn = document.getElementById('Contact')

const clearPage = () => {
  const content = document.getElementById('content')
 while(content.firstChild){
  content.removeChild(content.firstChild)
 }}

menuBtn.addEventListener('click', () => {
  clearPage()
  MenuModule()
})
aboutUsBtn.addEventListener('click', () => {
  clearPage()
  aboutModule()
})
contactBtn.addEventListener('click', () => {
  clearPage()
  contactUsModule()
})