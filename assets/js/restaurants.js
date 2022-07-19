const product = document.getElementById("product_row");

const productListArray = [
    {
        image: "./assets/images/product-1.avif",
        promoted: true,
        off: 40,
        time: 42,
        restro_name: "Wadeshwar",
        rating: 4.0,
        menu_item: "South Indian, Sandwich, Fast Food, Maharashtrian, Beverages, Shake",
        price: 100,
        safety_text: 2250,
        in_cart: 0
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/6/10506/6fa52a1c7dad34faa24f1bae4e7159de_o2_featured_v2.jpg",
        promoted: false,
        off: 20,
        time: 30,
        restro_name: "Domino's Pizza",
        rating: 3.7,
        menu_item: "Pizza, Fast Food, Desserts, Beverages",
        price: 150,
        safety_text: 6150,
        in_cart: 0
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/1/10571/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg",
        promoted: true,
        off: 0,
        time: 31,
        restro_name: "McDonald's",
        rating: 4.0,
        menu_item: "Burger, Fast Food, Beverages, Coffee, Desserts",
        price: 150,
        safety_text: 10450,
        in_cart: 0
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/2/19253372/a17b4baf909d7f29344f73d991cafcc6_o2_featured_v2.jpg",
        promoted: false,
        off: 60,
        time: 33,
        restro_name: "Pind Punjab",
        rating: 4.0,
        menu_item: "North Indian, Kebab, Chinese, Mughlai, Desserts, Sichuan",
        price: 250,
        safety_text: 13425,
        in_cart: 0
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/9/19034479/cc63e5aec3e69bd1913d11746c832b5d_featured_v2.jpg",
        promoted: true,
        off: 0,
        time: 42,
        restro_name: "Amara",
        rating: 4.7,
        menu_item: "North Indian, Chinese, Italian, Desserts",
        price: 600,
        safety_text: 4501,
        in_cart: 0
    },

    {
        image: "./assets/images/product-1.avif",
        promoted: true,
        off: 40,
        time: 42,
        restro_name: "Wadeshwar",
        rating: 4.0,
        menu_item: "South Indian, Sandwich, Fast Food, Maharashtrian, Beverages, Shake",
        price: 100,
        safety_text: 2250,
        in_cart: 0
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/6/10506/6fa52a1c7dad34faa24f1bae4e7159de_o2_featured_v2.jpg",
        promoted: false,
        off: 20,
        time: 30,
        restro_name: "Domino's Pizza",
        rating: 3.7,
        menu_item: "Pizza, Fast Food, Desserts, Beverages",
        price: 150,
        safety_text: 6150,
        in_cart: 0
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/1/10571/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg",
        promoted: true,
        off: 0,
        time: 31,
        restro_name: "McDonald's",
        rating: 4.0,
        menu_item: "Burger, Fast Food, Beverages, Coffee, Desserts",
        price: 150,
        safety_text: 10450,
        in_cart: 0
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/2/19253372/a17b4baf909d7f29344f73d991cafcc6_o2_featured_v2.jpg",
        promoted: false,
        off: 60,
        time: 33,
        restro_name: "Pind Punjab",
        rating: 4.0,
        menu_item: "North Indian, Kebab, Chinese, Mughlai, Desserts, Sichuan",
        price: 250,
        safety_text: 13425,
        in_cart: 0
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/9/19034479/cc63e5aec3e69bd1913d11746c832b5d_featured_v2.jpg",
        promoted: true,
        off: 0,
        time: 42,
        restro_name: "Amara",
        rating: 4.7,
        menu_item: "North Indian, Chinese, Italian, Desserts",
        price: 600,
        safety_text: 4501,
        in_cart: 0
    },

]

for(let i=0; i<productListArray.length; i++) {
    const promoted = productListArray[i].promoted;
    let ele;
    if(promoted == true) {
        ele = "<div class='promoted'>Promoted</div>";
    } else {
        ele = "";
    }

    
    const{image, off, time, restro_name, rating, menu_item, price, safety_text} = productListArray[i];
    const element = document.createElement("div");
    element.className = "product-box";
    element.innerHTML = `<div class='card'>
        <div class='image-box'>
            <div class='image'><img src=${image} class='product-image'></div>
            ${ele}
            <div class='off'>${off}% Off</div>
            <div class='time'> ${time}min</div>
        </div>
        <div class='content-section'>
            <a href="#" class="add-cart">Add to cart</a>
            <div class='restro-sec'><h4>${restro_name}</h4><span class='rating'>${rating}</span></div>
            <div class='menu-section'><p class='menu-item'>${menu_item}</p><p class='price'>${price}</p></div>
            <div class='safety-section'><p>${safety_text} + orders placed from here recently</p></div>
        </div>
    </div>`
    product.append(element);
}




let carts = document.querySelectorAll('.add-cart');
for(let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', ()=>{
        cartNumbers(productListArray[i]);
        totalCost(productListArray[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').innerHTML = productNumbers;
    }
}

function cartNumbers(product) {
    // console.log("clicked is", product)
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').innerHTML = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').innerHTML = 1;
    }
    setItems(product);
}

function setItems(product) {
    // console.log("Inside");
    // console.log("prodict is", product);

    let cartItems = localStorage.getItem('productsincart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);

    if(cartItems != null) {
        if(cartItems[product.restro_name] == undefined) {
            cartItems = {
                ...cartItems, [product.restro_name]:product
            }
        }
        cartItems[product.restro_name].in_cart += 1;
    } 
    else {
        product.in_cart = 1;
        cartItems = {
            [product.restro_name]: product
        }
    }

    localStorage.setItem("productsincart", JSON.stringify(cartItems))
}

function totalCost(product) {
    // console.log("price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price)
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsincart");
    cartItems = JSON.parse(cartItems);
    
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    let productTotal = document.querySelector(".productTotal")

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        // productTotal.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <div class="food-title"><img src="${item.image}">
            <span>${item.restro_name}</span></div>
            <div>${item.price}</div>
            <div>${item.in_cart}</div>
            <div>${item.in_cart * item.price}</div>
            </div>
            
            `;
        });

        productTotal.innerHTML = `
        <div class="total-cost">
             <h4 class="title">Total</h4>
             <h4 class="final-cost">${cartCost}</h4>
         </div>
        `

        // productContainer.innerHTML = `
        // <div class="total-cost">
        //     <h4 class="title"></h4>
        //     <h4 class="final-cost">${cartCost}</h4>
        // </div>
        // `
    }

}

onLoadCartNumbers();
displayCart();



var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  displayCart();
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// const searchInput = document.querySelector('[data-search]');

// searchInput.addEventListener("input", e  => {
//     const value = e.target.value.toLowerCase();
//     // console.log(productListArray);
//     productListArray.forEach(productListArray => {
//         const isVisible = productListArray.restro_name.includes(value) || productListArray.menu_item.includes(value);
//         productListArray.element.classList.toggle("hide", !isVisible)
//     })
// })

// const searchYoutubers = () => {
//     let filter = document.getElementById("myInput").value.toUpperCase();
// }