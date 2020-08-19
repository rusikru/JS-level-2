class Burgers{
	constructor(container = '.burgers'){
		this.container = container;
		this.burgers = [];
		this._fetchProducts(this.burgers);
		this.render();
	}
	_fetchProducts(){
		this.burgers = [
		{id:1, name: 'Small Burger', price: 50, callories: 20, img:"img/smallBurger.jpg"},
		{id:2, name: 'Big Burger', price: 100, callories: 40, img:"img/BigBurger.jpg"}
		];
	}
	render(){
		const block= document.querySelector(this.container);
		for (let product of this.burgers){
			const item = new ProductItem(product);
			block.insertAdjacentHTML("beforeend", item.rander());
		}
	}
}
class ProductItem{
	constructor(product){
		this.name= product.name;
		this.price = product.price;
		this.callories = product.callories;
		this.img = product.img;
	}
	rander(){
		return `<div class = "burgers-item">
				<h3>${this.name}</h3>
				<img src = "${this.img}" width = "300px" height = "250px">
				<p class = "price">${this.price} &#x20bd </p>
				<span>${this.callories} ccal</span>
				<button class = "btn-buy">Добавить </button>
				</div>`
	}
}
class Filling extends Burgers{
	constructor(container = ".filling"){
		super(container);
	}
	_fetchProducts(){
		this.burgers = [
		{id:1, name: 'Cheese', price: 10, callories: 20, img:"img/cheese.jpg"},
		{id:2, name: 'Salad', price: 20, callories: 5, img:"img/salad.jpg"},
		{id:3, name: 'Potato', price: 15, callories: 10, img:"img/potato.jpg"}
		];
	}
	rander(){														// не получается сделать другую вертску для div'а filling-item"
		return super.rander() `<div class = "filling-item">		
				<h4>${this.name}</h4>
				<img src = "${this.img}" width = "200px" height = "150px">
				<p>${this.price} &#x20bd </p>
				<span>${this.callories} ccal</span>
				<button class = "btn-buy">Добавить</button>
				</div>`
	}
	render(){
		return super.render();
	}
}
class Addition extends Burgers{
	constructor(container = ".addition"){
		super(container);
	}
	_fetchProducts(){
		this.burgers = [
		{id:1, name: 'spice', price: 15, callories: 0, img:"img/spice.jpg"},
		{id:2, name: 'Mayonnaise', price: 20, callories: 5, img:"img/mayo.jpg"},
		];
	}
}

let list = new Burgers();
let list2 = new Filling();
let list3 = new Addition();

let button = document.querySelectorAll(".btn-buy");
for(j = 0; j <= button.length - 1; j++){
	button[j].setAttribute('class', button[j].getAttribute('class') + " " + j); // пронумеровать каждый класс кнопок, чтобы они различались
}

// for(i = 0; i <= button.length - 1; i++){
let summary = button[1].addEventListener('click', function(event){
	let btn = button[1].getAttribute('class').split(" ");

	let price = $("p").text().split("₽"); //достаю из атрибута текст и кладу в массив только цифры (почти)
	// console.log(price[1]);
	document.querySelector('.sum').innerHTML = `Cумма вашего заказа:${price[btn[1]]} &#x20bd`;
	return price;
});
// }
