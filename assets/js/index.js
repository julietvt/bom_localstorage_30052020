'use strict';
/*
localStorage ???
- хранилище данных
- объект
- свойство объекта window
localStorage.setItem(key,value); // строки
localStorage.getItem(key);
*/

/*
// ЗАДАНИЕ !!!!
//1-уровень: добавить объект user в локал сторидж (имя и пароль)
//2-уровень: тоже но использовать асинхронную функцию
const AUTHORIZED_USER = "AUTHORIZED_USER";
const user = {
    fullname: "John Fox",
    email: "john@gmail.com"
};
// 1-уровень
localStorage.setItem(AUTHORIZED_USER, JSON.stringify(user));
onload = function (e) {
    console.log(localStorage.getItem(AUTHORIZED_USER));

}
// 2 уровень
const promise = new Promise(function (resolve,reject) {
    setTimeout(function()
    {
        localStorage.setItem(AUTHORIZED_USER, JSON.stringify(user));
        const value = localStorage.getItem(AUTHORIZED_USER);
        if (value) {
            resolve(value);
        } else {
            reject(new Error());
        }
    }, 0)
});
onload = async function (e) {
    const autUser = await promise;
    console.log(JSON.parse(autUser));
};

*/

/*
//  ЗАДАЧА C формы получить данные из input и поместить в хранилище
const AUTHORIZED_USER = "AUTHORIZED_USER";
function User(name,surname,email) {
    this.name=name;
    this.surname = surname;
    this.email = email;
}
const nameInput = document.querySelector("input[name='name']");
const surnameInput = document.querySelector("input[name='surname']");
const emailInput = document.querySelector("input[name='email']");
const loginButton = document.getElementById("loginbtn");
loginButton.onclick = function (e) {
    const autorizUser = new User(nameInput.value,
        surnameInput.value,
        emailInput.value);
    sessionStorage.setItem(AUTHORIZED_USER, JSON.stringify(autorizUser));
};
*/

const locationList = document.getElementById('location');
for(let prop in location){
    if(typeof  location[prop] === 'string'){
        const listItem = document.createElement('li');
        listItem.innerText = `${prop} = ${location[prop]}`;
        locationList.appendChild(listItem);
    }
}
const reloadbtn = document.getElementById('reload');
reloadbtn.addEventListener('click',function () {
    location.reload();
});

// reload(), replace(), assign()

















































