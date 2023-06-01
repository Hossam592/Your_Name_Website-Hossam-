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
        Title:"T-Shirt",
        price:"25$",
        img:"Images/cloth_3.jpg",

    },
    {
        id:4,
        Title:"Coater",
        price:"30$",
        img:"Images/shoe.png",

    },
    {
        id:5,
        Title:"T-Shirt",
        price:"25$",
        img:"Images/cloth_3.jpg",

    },
    {
        id:6,
        Title:"Tank top",
        price:"50$",
        img:"Images/cloth_1.jpg",

    },
    {
        id:7,
        Title:"Polo Shirt",
        price:"20$",
        img:"Images/cloth_2.jpg",

    },
    {
        id:8,
        Title:"Tank top",
        price:"50$",
        img:"Images/cloth_1.jpg",
    },
]

// Render items
let Product_list =document.querySelector('.Products')
let CurrentItem = ""
function renderItems(){
    products.forEach(product =>{
        CurrentItem += `
        <div class="col rounded-3">
        <div class="card">
            <img src="${product.img}" class="card-img-top" width="100%" height="200px" alt="...">
            <div class="card-body shop_product_txt">
                <a href="product.html"><p>${product.Title}</p></a>
                <p class="p2">Finding perfect product</p>
                <p>${product.price}</p>
            </div>
        </div>
        </div>
        `
        Product_list.innerHTML = CurrentItem
    })

}renderItems()