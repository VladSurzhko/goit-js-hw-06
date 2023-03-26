const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach(ingredient => {
const list =
document.querySelector("#ingredients");
const element = document.createElement("li");
element.textContent = ingredient;
element.classList.add("item")
list.append(element)
})


