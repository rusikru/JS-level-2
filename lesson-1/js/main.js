const products = [
    { id: 1, title: 'Notebook', price: 2000, img: "img/notebook.jpg" },
    { id: 2, title: 'Mouse', price: 20, img: "img/mouse.jpg" },
    { id: 3, title: 'Keyboard', price: 200, img: "img/keyboard.jpg" },
    { id: 4, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
];
//Функция для формирования верстки каждого товара
// const renderProduct = (...products) => { // пытался сократить код посредством spread - не получилось
const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3 class = "head-product">${title}</h3>
                <img src = ${img}>
                <p>${price} &#x20bd</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    // const productsList = list.map(item => renderProduct(item.products));/ пытался сократить код посредством spread - не получилось
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(' '); // убираем запятые, которые были, так как передавали массив
};

renderPage(products);
// Стилизация
let productItem = document.querySelectorAll(".product-item"); // находим все дивы, чтобы в каждом прописать стили для дочерних элементов(картинка, кнопка и др)
for (i = 0; i <= productItem.length - 1; i++) {
    let image = document.getElementsByTagName("img")[i].style.width = "300px";
    let headProduct = document.querySelectorAll(".head-product")[i].style.fontSize = "28px";
    
    let price = document.querySelectorAll("p");
    price[i].style.fontSize = "24px";
    price[i].style.margin = "20px 0px 20px 30px";

    let btn = document.querySelectorAll(".buy-btn"); // есть ли возможность, аписать в более кратком виде все что ниже (стили)?
    btn[i].style.width = "250px";
    btn[i].style.heigh = "40px";
    btn[i].style.textDecoration = "none";
    btn[i].style.backgroundColor = "#FFF5EE";
    btn[i].style.display = "inline";
    btn[i].style.border = "none";
    btn[i].style.fontSize = "18px";
    btn[i].style.margin = "0 0 0 25px";
}