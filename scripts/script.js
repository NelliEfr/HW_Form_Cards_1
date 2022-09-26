//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.
//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.


const form = document.querySelector('.form');
const container = document.querySelector('.container');
let cards_info = [];

// const render = () => {
//     container.innerText = '';
//     cards_info.forEach(({ name, last_name, age, rate, days, email, photo, progress }) => {
//         const card = document.createElement('div');
//   const nameElem = document.createElement('p');
//   const lastNameElem = document.createElement('p');
//   const ageElem = document.createElement('p');
//   const salaryElem = document.createElement('p');
//   const photoElem = document.createElement('img');
//   const emailElem = document.createElement('a');
//   const emailTextElem = document.createElement('span');
//   const progressContainer = document.createElement('div');
//   const progressLine = document.createElement('div');
//   const progressValue = document.createElement('p');
//   const emailContainer = document.createElement('div');


//   nameElem.innerText = `Name: ${name}`;
//   lastNameElem.innerText = `Last name: ${last_name}`;
//   ageElem.innerText = `Age: ${age}`;
//   salaryElem.innerText = `Salary: ${rate * days}`;
//   emailTextElem.innerText = 'Email: ';
//   emailElem.innerText = `${email}`;
//   progressValue.innerText = `${progress}%`;

//   photoElem.setAttribute('src', photo);
//   photoElem.setAttribute('alt', 'photo');
//   emailElem.setAttribute('href', `mailto:${email}`);


//   card.classList.add('card');

//   photoElem.classList.add('img'); 

//   emailElem.classList.add('email');
  

//   progressContainer.classList.add('progress-container');
  
//   progressLine.classList.add('progress-line');

//   progressValue.classList.add('progress-value');

//   progressLine.style.width = progress + '%';

//   progressLine.style.backgroundColor = progress >= 50 ? 'powderblue' : 'azure';


//   progressContainer.append(progressLine);

//   progressLine.append(progressValue);

//   emailContainer.append(emailTextElem, emailElem);


//   card.append(nameElem, lastNameElem, ageElem, salaryElem, photoElem, emailContainer, progressContainer);
//   container.append(card);

//     })
// }

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const{ name, last_name, age, rate, days, photo, email, progress } = event.target;

//     cards_info.push({
//         name:name.value,
//         last_name:last_name.value,
//         age:age.value,
//         rate:rate.value,
//         days:days.value,
//         email:email.value,
//         photo:photo.value,
//         progress:progress.value

//     })

//     name.value = '';
//     last_name.value = '';
//     age.value = '';
//     rate.value = '';
//     days.value = '';
//     photo.value = '';
//     email.value = '';
//     progress.value = '';
   
//     render();

// })

const render = ({ name, last_name, age, rate, days, email, photo, progress }) => {
        const card = document.createElement('div');
  const nameElem = document.createElement('p');
  const lastNameElem = document.createElement('p');
  const ageElem = document.createElement('p');
  const salaryElem = document.createElement('p');
  const photoElem = document.createElement('img');
  const emailElem = document.createElement('a');
  const emailTextElem = document.createElement('span');
  const progressContainer = document.createElement('div');
  const progressLine = document.createElement('div');
  const progressValue = document.createElement('p');
  const emailContainer = document.createElement('div');


  nameElem.innerText = `Name: ${name}`;
  lastNameElem.innerText = `Last name: ${last_name}`;
  ageElem.innerText = `Age: ${age}`;
  salaryElem.innerText = `Salary: ${rate * days}`;
  emailTextElem.innerText = 'Email: ';
  emailElem.innerText = `${email}`;
  progressValue.innerText = `${progress}%`;

  photoElem.setAttribute('src', photo);
  photoElem.setAttribute('alt', 'photo');
  emailElem.setAttribute('href', `mailto:${email}`);


  card.classList.add('card');

  photoElem.classList.add('img'); 

  emailElem.classList.add('email');
  

  progressContainer.classList.add('progress-container');
  
  progressLine.classList.add('progress-line');

  progressValue.classList.add('progress-value');

  progressLine.style.width = progress + '%';

  progressLine.style.backgroundColor = progress >= 50 ? 'powderblue' : 'azure';


  progressContainer.append(progressLine);

  progressLine.append(progressValue);

  emailContainer.append(emailTextElem, emailElem);


  card.append(nameElem, lastNameElem, ageElem, salaryElem, photoElem, emailContainer, progressContainer);
  container.append(card);

    }


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const{ name, last_name, age, rate, days, photo, email, progress } = event.target;

    cards_info.push({
        name:name.value,
        last_name:last_name.value,
        age:age.value,
        rate:rate.value,
        days:days.value,
        email:email.value,
        photo:photo.value,
        progress:progress.value

    })

    name.value = '';
    last_name.value = '';
    age.value = '';
    rate.value = '';
    days.value = '';
    photo.value = '';
    email.value = '';
    progress.value = '';
   
    render(cards_info[cards_info.length - 1]);

})