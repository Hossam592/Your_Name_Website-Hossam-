const products =[
    {
        id:0,
        Title:"Tank top",
        price:"50$",
        img:"Images/cloth_1.jpg",
    },
    {
        id:1,
        Title:"Coater",
        price:"30$",
        img:"Images/shoe.png",
    },
    {
        id:2,
        Title:"Polo Shirt",
        price:"20$",
        img:"Images/cloth_2.jpg",
    },
    {
        id:3,
        Title:"Coater",
        price:"30$",
        img:"Images/shoe.png",
    },
    {
        id:4,
        Title:"T-Shirt",
        price:"25$",
        img:"Images/cloth_3.jpg",
    },
    {
        id:5,
        Title:"Tank top",
        price:"50$",
        img:"Images/cloth_1.jpg",
    },
    {
        id:6,
        Title:"T-Shirt",
        price:"25$",
        img:"Images/cloth_3.jpg",
    },
    {
        id:7,
        Title:"Tank top",
        price:"50$",
        img:"Images/cloth_1.jpg",
    },
    {
        id:8,
        Title:"Polo Shirt",
        price:"20$",
        img:"Images/cloth_2.jpg",
    }
]

// Render items
let Products_list =document.querySelector('.Products')
let CurrentItem = ""
function renderItems(){
    products.forEach(product =>{
        CurrentItem += `
        <div class="col rounded-3 product">
        <div class="card">
            <img src="${product.img}" class="card-img-top product_img" width="100%" height="200px" alt="...">
            <div class="card-body shop_product_txt">
                <a href="product.html" class="product_title"><p>${product.Title}</p></a>
                <p class="p2">Finding perfect product</p>
                <p class="product_price">${product.price}</p>
            </div>
        </div>
        </div>
        `
        Products_list.innerHTML = CurrentItem
    })
}renderItems()