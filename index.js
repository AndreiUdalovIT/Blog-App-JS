let posts = [];

const title = document.querySelector('.js__title__input');
const text = document.querySelector('.js__text__input');
const button = document.querySelector('.js__send__btn');
const post = document.querySelector('.js-post');

button.addEventListener('click', function () {
    const getDate = new Date();
    const getTitle = title.value;
    const getText = text.value;
    posts.push({
        date: `${getDate.toLocaleDateString('ru-RU')} ${getDate.toLocaleTimeString()}`,
        title: getTitle,
        text: getText,});
    
    
    let postHTML = '';

    for (let i = 0; i < posts.length; i++) {
        postHTML = postHTML + `
                    <div class="flex__post">    
                        <p class="date__post">${posts[i].date}</p>
                        <p class="title__post">${posts[i].title}</p>
                        <p class="text__post">${posts[i].text}</p>
                    </div>`
        
    }
    
    post.innerHTML = postHTML

    title.value = '';
    text.value = '';
})