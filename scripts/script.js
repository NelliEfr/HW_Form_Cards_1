const rootElem = document.querySelector('#root');
const formElem = document.querySelector('.form');

formElem.addEventListener('submit', (event) => {
	event.preventDefault();
	const card = document.createElement('div');
	const nameElem = document.createElement('p');
	const emailElem = document.createElement('a');
	const photoElem = document.createElement('img');

	const { name, lastname, email, photo } = event.target;

	nameElem.innerText = `Name: ${name.value} ${lastname.value}`;
	emailElem.innerText = email;
	photoElem.setAttribute('src', photo.value);
	photoElem.setAttribute('alt', 'photo');
	emailElem.setAttribute('href', `mailto: ${email}`);

	photoElem.classList.add('img');
	card.classList.add('card');

	card.append(nameElem, emailElem, photoElem);
	rootElem.append(card);

	name.value = '';
	lastname.value = '';
	email.value = '';
	photo.value = '';
});
