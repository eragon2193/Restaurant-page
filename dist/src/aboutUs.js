
export default function aboutModule() {
  const content = document.getElementById('content')
  const aboutSection = document.createElement('div')
  aboutSection.classList.add('about-us')
  const p1 = document.createElement('p')
  p1.innerText = `Welcome to Dragon's Den, a one-of-a-kind restaurant that promises to take you on a culinary journey through the mystical world of dragons. Our restaurant is designed to transport you to a world of fantasy and adventure, where you can feast on delicious food inspired by the legendary creatures themselves.`
  const p2 = document.createElement('p')
  p2.innerText = `Our team of chefs is highly skilled and passionate about creating unique dishes that will tantalize your taste buds. They use only the freshest ingredients, carefully sourced to ensure the highest quality and flavor. Whether you're in the mood for something spicy, sweet, or savory, our menu has something for everyone.`
  const p3 = document.createElement('p')
  p3.innerText = `We are committed to providing our guests with the best possible dining experience, and we strive to exceed your expectations every time you visit. Our friendly staff is always on hand to answer your questions, make recommendations, and ensure that you have a memorable time at Dragon's Den.We are committed to providing our guests with the best possible dining experience, and we strive to exceed your expectations every time you visit. Our friendly staff is always on hand to answer your questions, make recommendations, and ensure that you have a memorable time at Dragon's Den.`
  const p4 = document.createElement('p')
  p4.innerText = `So come and join us at Dragon's Den, where you can indulge in delicious food, immerse yourself in a world of fantasy, and discover the magic of dragons. We look forward to welcoming you!`
  aboutSection.append(p1,p2,p3,p4)
  content.append(aboutSection)
}