class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        //this.allProducts = [];//массив товаров c добавлением фото
        this._fetchProducts();
        this.render();//вывод товаров на страницу
        this.SumAllGoods();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            
           // this.allProducts.push(item);
             block.insertAdjacentHTML("beforeend",item.render());
             //block.innerHTML += item.render();
        }
    }
    // общая сумма всех товаров
    SumAllGoods(){
        let sum = 0;
        this.goods.forEach((element) => sum += element.price)
            console.log(sum);
    }
}

class ProductItem{
    constructor(product,img='https://placehold.it/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

//Корзина
class CardList{
    constructor (container = ".card"){
        this.container = container;
        this.chooseGoods = [];
        this.addToCard();
    }
}
class CardItem{
    constructor(product){
    this.deleteItem();
    this.compareItems();  //сравнение товаров
    this.checkPromocode();
    }
deleteItem(){

}
compareItems(){

}
checkPromocode(){

}
}
