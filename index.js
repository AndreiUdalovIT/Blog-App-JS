let posts = [];

const title = document.querySelector('.js__title__input');
const text = document.querySelector('.js__text__input');
const button = document.querySelector('.js__send__btn');
const post = document.querySelector('.js__post');
const error = document.querySelector('.js__error');

let errorHTML = '';

button.addEventListener('click', function () {
    if (titleError() === false) {
        if (textError() === false) {
            getValue();
            sendPost();
            clearValue();}
    }
})


function titleError() {
    let titleLength = title.value.length;
        
    if ((titleLength > 100) || (titleLength === 0)) {
        errorHTML = `<p class="error__text">Заголовок больше 100 символов или пустой</p>`
        error.innerHTML = errorHTML;
        } else {
        errorHTML = '';
        error.innerHTML = errorHTML;
        return false;
    }
}

function textError() {
    let textLength = text.value.length;
        
    if ((textLength > 200) || (textLength === 0)) {
        errorHTML = `<p class="error__text">Пост больше 200 символов или пустой</p>`
        error.innerHTML = errorHTML;
        } else {
        errorHTML = '';
        error.innerHTML = errorHTML;
        return false;
    }
}

function getValue() {
    const dateValue = new Date();
    const titleValue = title.value;
    const textValue = text.value;
        
    posts.push({
        date: `${dateValue.toLocaleDateString('ru-RU')} ${dateValue.toLocaleTimeString()}`,
        title: titleValue,
        text: textValue,});
}

function sendPost() {
    let postHTML = '';

    for (let i = 0; i < posts.length; i++) {
        postHTML = postHTML + `
                    <li class="flex__post">    
                        <p class="date__post">${posts[i].date}</p>
                        <p class="title__post">${posts[i].title}</p>
                        <p class="text__post">${posts[i].text}</p>
                    </li>`
            
    }
        
    post.innerHTML = postHTML
}
    
function clearValue() {
    title.value = '';
    text.value = '';
}