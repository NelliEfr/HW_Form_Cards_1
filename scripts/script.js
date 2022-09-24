//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.
//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.


const form = document.querySelector('.form');
const container = document.querySelector('.container');

form.addEventListener('submit', (event) => {
    event.preventDefault();

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
  


  const{ name, last_name, age, rate, days, photo, email, progress } = event.target;//this

  nameElem.innerText = `Name: ${name.value}`;
  lastNameElem.innerText = `Last name: ${last_name.value}`;
  ageElem.innerText = `Age: ${age.value}`;
  salaryElem.innerText = `Salary: ${rate.value * days.value}`;
  emailTextElem.innerText = 'Email: ';
  emailElem.innerText = `${email.value}`;
  progressValue.innerText = `${progress.value}%`;

  photoElem.setAttribute('src', photo.value);
  photoElem.setAttribute('alt', 'photo');
  emailElem.setAttribute('href', email.value);

  


 

  card.classList.add('card');

  photoElem.classList.add('img'); 

  emailElem.classList.add('email');

  progressContainer.classList.add('progress-container');
  
  progressLine.classList.add('progress-line');

  progressValue.classList.add('progress-value');

  progressLine.style.width = progress.value + '%';

  progressLine.style.backgroundColor = progress.value >= 50 ? 'powderblue' : 'azure';



  progressContainer.append(progressLine);

  progressLine.append(progressValue);


  card.append(nameElem, lastNameElem, ageElem, salaryElem, photoElem, emailTextElem, emailElem, progressContainer);
  container.append(card);

  name.value = '';
  last_name.value = '';
  age.value = '';
  rate.value = '';
  days.value = '';
  photo.value = '';
  email.value = '';
  progress.value = '';




})