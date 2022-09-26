const container = document.querySelector('.container')
const allProduct=document.createElement('div')
container.appendChild(allProduct)
allProduct.classList.add('allproduct')
const products = [
    { id: 1, name: 'laptop', price: 99, image: './img/bridge.jpg' },
    { id: 2, name: 'mobile', price: 66, image: './img/line.jpg' },
    { id: 3, name: 'tv', price: 44, image: './img/mountain.jpg' },
];
let userBasket = [];
                                //<<function>>//
function perosonBasket(Basket){
    Basket.forEach(item=>{
        container.insertAdjacentHTML('beforeend',`
        <div class='user__basket'>

        
        
        
        
        
        `)
    })
}
function addProductToBasket(productId) {
    let mainProduct=products.find(function(product){
        return product.id==productId
    })
    userBasket.push(mainProduct)
    perosonBasket(userBasket)
}

//////////////////////////////////////
products.forEach(product => {
    allProduct.insertAdjacentHTML('afterbegin', `
    
        <div class="product">
            <div class='image'>
                <img src='${product.image}' alt="">
            </div>
            <div class="desc">
                <h2 class='bg-secondary'>${product.name}</h2>
                <h4 class='bg-primary color-light'>${product.price}</h4>
                 <input type="number" class='mb-2' name="quantity" min="1" max="5" style='width:100%;' def>
                <button class='btn btn-danger' id=${product.id}>Add to Basket</button>
            </div>
        </div>`)
})

let allBtn = document.querySelectorAll('.btn')
allBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let idButton = e.target.id;
        addProductToBasket(idButton)

    })
})
