var rootElement = document.documentElement
var home = document.getElementById('Home')
var about = document.getElementById('about_li')
var product = document.getElementById('product_li')
var login = document.getElementById('login_li')
var home_li = document.getElementById('home_li')
// if (rootElement.scrollIntoView(home) == true){
//     console.log('True')
// }
// console.log(home.getBoundingClientRect())
rootElement.addEventListener("scroll", isInView(home))

function isInView(element){
    var view = element.getBoundingClientRect()
    console.log(view.top)
    if (view.top === 0) {
        console.log(view.top)
        home_li.setAttribute("style", "color: lime")
    }

}

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

