// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку". 

// Email должен быть кликабельным.
// Фото должно отображаться.

// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

// После отправки необходимо очистить инпуты.

const workers = document.querySelector('.workers');
const body = document.querySelector('body');

const getTextCardElem = (valueName, value) => {
    const Elem = document.createElement('div');
    const ElemLeft = document.createElement('div');
    const ElemRight = document.createElement('div');

    Elem.classList.add('cardItem')
    ElemLeft.classList.add('left');
    ElemRight.classList.add('right');

    ElemLeft.innerText = valueName;
    ElemRight.innerText = value;

    Elem.append(ElemLeft, ElemRight);
    return Elem;
}

const getLinkCardElem = (valueName, value) => {
    const Elem = document.createElement('div');
    const ElemLeft = document.createElement('div');
    const ElemRight = document.createElement('div');
    const ElemLink = document.createElement('a');

    Elem.classList.add('cardItem')
    ElemLeft.classList.add('left');
    ElemRight.classList.add('right');

    ElemLink.setAttribute('href', `mailto:${value}`);
    ElemLeft.innerText = valueName;
    ElemLink.innerText = value;

    ElemRight.append(ElemLink);
    Elem.append(ElemLeft, ElemRight);
    return Elem;
}

// const setProgressColorElem = (value) => {
//     const progressColorElem = document.createElement('div');
//     progressColorElem.classList.add('progressColorElem');
//     progressColorElem.innerText = value;
//     return progressColorElem;
// }

workers.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const cardElem = document.createElement('div');
    const photoElem = document.createElement('img');
    const progressElem = document.createElement('div');
    const progressColorElem = document.createElement('div');
    // const progressValueElem = document.createElement('p');

    cardElem.classList.add('cardElem');
    photoElem.classList.add('photo');
    progressElem.classList.add('progressElem');
    progressColorElem.classList.add('progressColorElem');
    // progressValueElem.classList.add('progressValueElem');

    const {firstname, lastname, email, photo, progress} = event.target;     // const firstname = event.target.firstname.value;
    
    const firstNameElem = getTextCardElem(`First name: `, firstname.value);
    const lastNameElem = getTextCardElem(`Last name: `, lastname.value);
    // const progressElem = getTextCardElem(`Progress: `, setProgressColorElem(progress.value));
    const emailElem = getLinkCardElem(`e-mail: `, email.value);

    photoElem.setAttribute('src', photo.value);
    photoElem.setAttribute('alt', 'Photo');
    // progressValueElem.innerText = `${progress.value}%`;
    progressColorElem.innerText = `${progress.value}%`;
    progressColorElem.style.width = `${progress.value}%`;
    
    if(progress.value <= 30) {
        progressColorElem.style.backgroundColor = '#d55757';
    } else if(progress.value <= 50){
        progressColorElem.style.backgroundColor = '#e1d14a';
    } else {
        progressColorElem.style.backgroundColor = '#4caf50';
    }

    // progressElem.append(progressValueElem);
    progressElem.append(progressColorElem);
    cardElem.append(firstNameElem, lastNameElem, emailElem, photoElem, progressElem);
    body.append(cardElem);

    firstname.value = '';
    lastname.value = '';
    email.value = '';
    photo.value = '';
    progress.value = '';
})

// https://uprostim.com/wp-content/uploads/2021/03/image107-34-scaled.jpg