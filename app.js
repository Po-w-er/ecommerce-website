const profile = document.querySelector(".profile")
const cartContainer = document.querySelector(".cart-container")
const cart = document.querySelector(".cart")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
let quantityNumber = document.querySelector(".number")
const addToCart = document.querySelector(".main-cart")
const addToCartBtn = document.querySelector(".add-cart")
const displaySect = document.querySelectorAll(".display img")
const image = document.querySelector(".mainImg")
const next = document.querySelector(".next")
const previous = document.querySelector(".previous")
const nextImg = document.querySelector(".next-img")
const previousImg = document.querySelector(".previous-img")
const overlayImg = document.querySelectorAll(".overlay-img")
const showCaseImg = document.querySelector(".show-case")
const badge = document.querySelector(".badge")
const closeSideBar = document.querySelector(".close-sideBar")
const sideBar = document.querySelector(".sideBar")
const hamburger = document.querySelector(".hamburger")




hamburger.addEventListener("click", ()=>{
    sideBar.classList.add("open-aside")
})

closeSideBar.addEventListener("click", ()=>{
    sideBar.classList.remove("open-aside")
})
const shoeImages = [
    {img: "./images/image-product-1.jpg"},
    {img: "./images/image-product-2.jpg "},
    {img: "./images/image-product-3.jpg"},
    {img: "./images/image-product-4.jpg "},
]

for(let i = 0; i < displaySect.length; i++){
    displaySect[i].addEventListener("click", function(e){
        let imgId = e.target.dataset.id
        showCaseImg.src = shoeImages[imgId].img
    })
}


let counter = 0;

next.addEventListener("click", (e)=>{
   counter = counter + 1
   if(counter > shoeImages.length - 1){
      counter = 0
   }
   image.src = shoeImages[counter].img
   for(let i = 0; i < overlayImg.length; i++){
    let currentPic = document.querySelectorAll(".active-img")
    currentPic[0].className = displaySect[0].className.replace("active", " ")
    overlayImg[counter].className = "active-img"
   }
})

previous.addEventListener("click", ()=>{
    counter--
    if(counter < 0){
       counter = shoeImages.length - 1
    }
    image.src = shoeImages[counter].img
    for(let i = 0; i < overlayImg.length; i++){
        let currentPic = document.querySelectorAll(".active-img")
        currentPic[0].className = displaySect[0].className.replace("active", " ")
        overlayImg[counter].className = "active-img"
       }
})


let counterImg = 0;
nextImg.addEventListener("click", (e)=>{
  counterImg = counterImg + 1
  if(counterImg > shoeImages.length - 1){
     counterImg = 0
  }
  image.src = shoeImages[counterImg].img
  for(let i = 0; i < overlayImg.length; i++){
   let currentPic = document.querySelectorAll(".active-img")
   currentPic[0].className = displaySect[0].className.replace("active", " ")
   overlayImg[counterImg].className = "active-img"
  }
})

previousImg.addEventListener("click", ()=>{
   counterImg--
   if(counterImg < 0){
      counterImg = shoeImages.length - 1
   }
   image.src = shoeImages[counterImg].img
   for(let i = 0; i < overlayImg.length; i++){
       let currentPic = document.querySelectorAll(".active-img")
       currentPic[0].className = displaySect[0].className.replace("active", " ")
       overlayImg[counterImg].className = "active-img"
      }
})
 

quantityNumber.textContent = 0
cart.addEventListener("click", ()=>{
    cartContainer.classList.toggle("show-cart")
})

function getQuantity(){
plus.addEventListener('click',()=>{
      quantityNumber.textContent++
})
minus.addEventListener('click', ()=>{
  
    if(quantityNumber.textContent > 0){
        quantityNumber.textContent--
    }
})

addToCartBtn.addEventListener("click", ()=>{
    addToCart.innerHTML = ` <div class="items">
    <div class="item-container">
      <div class="item-img">
        <img
          src="./images/image-product-1-thumbnail.jpg"
          alt=""
        />
      </div>
      <div class="item-desc">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 X ${quantityNumber.textContent + "    "}<span class="price"> $${125 * quantityNumber.textContent}.00</span></p>
      </div>
      <div class="delete">
        <img src="./images/icon-delete.svg" alt="" />
      </div>
    </div>
    <div class="item-checkout">
      <a href="" class="btn-checkout">Checkout</a>
    </div>
  </div>`
  if(quantityNumber.textContent > 0){
    badge.classList.add("show-badge")
    badge.textContent = quantityNumber.textContent
  }
  const deleteBtn = document.querySelector(".delete")
  deleteBtn.addEventListener("click", () =>{
    badge.classList.remove("show-badge")
     addToCart.innerHTML = `<p>Your cart is empty</p>`
  })
  


})
  
}

getQuantity()

const mainPic = document.querySelector(".main")
const overlay = document.querySelector(".overlay")
const close = document.querySelector(".close")
const x = document.getElementsByTagName("BODY")[0];
const width = x.getBoundingClientRect().width

function checkWidth(){
  if( width >= 800){
    mainPic.addEventListener("click", ()=>{
    overlay.classList.add("showit")
})
}

}
checkWidth()


for(let i = 0; i < displaySect.length; i++){
    displaySect[i].addEventListener("click", function(){
        let currentBtn = document.querySelectorAll(".active")
        currentBtn[0].className = displaySect[0].className.replace("active", " ")
        this.className += "active"
       
        
    })
}


close.addEventListener("click", ()=>{
    overlay.classList.remove("showit")
    overlay.classList.add("closeit")
})