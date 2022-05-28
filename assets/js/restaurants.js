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
        price: "₹100 for one",
        safety_text: 2250
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/6/10506/6fa52a1c7dad34faa24f1bae4e7159de_o2_featured_v2.jpg",
        promoted: false,
        off: 20,
        time: 30,
        restro_name: "Domino's Pizza",
        rating: 3.7,
        menu_item: "Pizza, Fast Food, Desserts, Beverages",
        price: "₹150 for one",
        safety_text: 6150
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/1/10571/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg",
        promoted: true,
        off: 0,
        time: 31,
        restro_name: "McDonald's",
        rating: 4.0,
        menu_item: "Burger, Fast Food, Beverages, Coffee, Desserts",
        price: "₹150 for one",
        safety_text: 10450
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/2/19253372/a17b4baf909d7f29344f73d991cafcc6_o2_featured_v2.jpg",
        promoted: false,
        off: 60,
        time: 33,
        restro_name: "Pind Punjab",
        rating: 4.0,
        menu_item: "North Indian, Kebab, Chinese, Mughlai, Desserts, Sichuan",
        price: "₹250 for one",
        safety_text: 13425
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/9/19034479/cc63e5aec3e69bd1913d11746c832b5d_featured_v2.jpg",
        promoted: true,
        off: 0,
        time: 42,
        restro_name: "Amara",
        rating: 4.7,
        menu_item: "North Indian, Chinese, Italian, Desserts",
        price: "₹600 for two",
        safety_text: 4501
    },

    {
        image: "./assets/images/product-1.avif",
        promoted: true,
        off: 40,
        time: 42,
        restro_name: "Wadeshwar",
        rating: 4.0,
        menu_item: "South Indian, Sandwich, Fast Food, Maharashtrian, Beverages, Shake",
        price: "₹100 for one",
        safety_text: 2250
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/6/10506/6fa52a1c7dad34faa24f1bae4e7159de_o2_featured_v2.jpg",
        promoted: false,
        off: 20,
        time: 30,
        restro_name: "Domino's Pizza",
        rating: 3.7,
        menu_item: "Pizza, Fast Food, Desserts, Beverages",
        price: "₹150 for one",
        safety_text: 6150
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/1/10571/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg",
        promoted: true,
        off: 0,
        time: 31,
        restro_name: "McDonald's",
        rating: 4.0,
        menu_item: "Burger, Fast Food, Beverages, Coffee, Desserts",
        price: "₹150 for one",
        safety_text: 10450
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/2/19253372/a17b4baf909d7f29344f73d991cafcc6_o2_featured_v2.jpg",
        promoted: false,
        off: 60,
        time: 33,
        restro_name: "Pind Punjab",
        rating: 4.0,
        menu_item: "North Indian, Kebab, Chinese, Mughlai, Desserts, Sichuan",
        price: "₹250 for one",
        safety_text: 13425
    },

    {
        image: "https://b.zmtcdn.com/data/pictures/chains/9/19034479/cc63e5aec3e69bd1913d11746c832b5d_featured_v2.jpg",
        promoted: true,
        off: 0,
        time: 42,
        restro_name: "Amara",
        rating: 4.7,
        menu_item: "North Indian, Chinese, Italian, Desserts",
        price: "₹600 for two",
        safety_text: 4501
    },

]


// const{image, off, time, restro_name, rating, menu_item, price, safety_text} = productListArray[i];




for(i=0; i<productListArray.length; i++) {
    const promoted = productListArray[i].promoted;
    let ele;
    if(promoted == true) {
        ele = "<div class='promoted'>Promoted</div>";
    } else {
        ele = "";
    }

    const element = document.createElement("div");
    element.className = "product-box";
    element.innerHTML = "<div class='card'><div class='image-box'><div class='image'><img src="
    + productListArray[i].image +
    "></div>"
    + ele +
    "<div class='off'>"
    + productListArray[i].off + 
    "% Off</div><div class='time'>" 
    + productListArray[i].time + 
    "min</div></div><div class='content-section'><div class='restro-sec'><h4>"
    + productListArray[i].restro_name +
    "</h4><span class='rating'>"
    + productListArray[i].rating +
    "</span></div><div class='menu-section'><p class='menu-item'>"
    + productListArray[i].menu_item +
    "</p><p class='price'>"
    + productListArray[i].price +
    "</p></div><div class='safety-section'><p>"
    + productListArray[i].safety_text +
     " + orders placed from here recently</p></div></div></div>"
    product.append(element);
}

// const list = document.getElementById("list");

// const productList1 = [
//     "Apple",
//     "Mango",
//     "Banana",
//     "Straberry",
//     "Pineapple"
// ]

// for(i=0; i<productList1.length; i++) {
//     const p = document.createElement("p");
//     p.className = "product-list"
//     p.innerHTML = productList1[i];
//     list.append(p);
// }