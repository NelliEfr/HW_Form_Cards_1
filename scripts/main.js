const formEl = document.querySelector('.form');
const containerEl = document.querySelector('.cards-container');
formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const card = document.createElement('div');
    const nameEl = document.createElement('p');
    const lastNameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const salaryEl = document.createElement('p');
    const imgEl = document.createElement('img');
    const emailEl = document.createElement('a');
    const progressEl = document.createElement('div');
    const progressBar = document.createElement('div');
    const progressText = document.createElement('p');

    const { name, last_name, age, rate, days, photo, email, progress } = event.target;

    nameEl.innerHTML = `Name: ${name.value}`;
    lastNameEl.innerHTML = `Last name: ${last_name.value}`;
    ageEl.innerHTML = `Age: ${age.value}`;
    salaryEl.innerText = `Salary: ${rate.value * days.value}`;
    photo.value = 'https://www.whatsappimages.in/wp-content/uploads/2021/06/HD-New-Beautiful-Unique-Profile-Images-Pictures.gif';
    imgEl.src = photo.value;
    progress.value = 0;
    emailEl.innerHTML = `<p>email: </p><a href = 'mailto:${email.value}'>${email.value}</a>`;
    progressText.innerText = progress.value + '%';

    card.classList.add('card');
    
    progressBar.style.width = progress.value + 'px';
    progressBar.classList.add('progress-bar');
    progressEl.classList.add('progress-box');

    progressText.classList = 'progress-text';
    
    progressBar.append(progressText);
    progressEl.append(progressBar);
    card.append(nameEl, lastNameEl, ageEl, salaryEl, emailEl, imgEl, progressEl);
    containerEl.append(card);
    name.value = '';
    age.value = '';
    last_name.value = '';
    rate.value = '';
    days.value = '';
    photo.value = '';
    email.value = '';
    progress.value = '';
})