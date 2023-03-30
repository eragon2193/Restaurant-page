export default function MenuModule() {
const content = document.getElementById('content')
const menuItems = [
  {
    name: 'Dragon Roll Sushi', 
    price: '12.50E',
    image: 'sushi', },
  {
    name:'Spicy Dragon Bowl',
    price: '13.00E',
    image: 'bowl'
  },
  {
    name: 'Dragon Chicken',
    price: '14.00E',
    image:  'chicken' 
  },
  { 
    name:'Dragon Fruit Bowl',
    price:'12.00E',
    image: 'fruit'
  }
]
const menu = document.createElement('div')
menu.classList.add('menu')
const createFoodCard = (type) =>{
  const card = document.createElement('div')
  card.classList.add('food-card')
  const foodText = document.createElement('div')
  foodText.classList.add('food-text')
  const foodName = document.createElement('h3')
  foodName.innerText = type.name
  const foodPrice = document.createElement('p')
  foodPrice.innerText = type.price
  const img = document.createElement('img')
  img.src = `./src/${type.image}.jpg`
  foodText.append(foodName,foodPrice)
  card.append(foodText, img)
  menu.append(card)
}
menuItems.forEach((x) => {
  createFoodCard(x)
})
content.append(menu)
}

// to do: 
// loop for card links and texts for them
// append all on each call