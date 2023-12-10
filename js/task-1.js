const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);
const printCategories  = () => {
const nameCategories = document.querySelectorAll(".item");
  nameCategories.forEach((element) => { 
    const nameC = element.querySelector("h2")
    console.log(`Category: ${nameC.textContent}`)
    const elements = element.querySelectorAll("li")  
    console.log(`Elements: ${elements.length}`)
  })
}
  printCategories()
