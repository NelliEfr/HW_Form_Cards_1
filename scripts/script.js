const rootElem = document.querySelector('#root');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const cardElem = document.createElement('div');
	const nameElem = document.createElement('p');
	const emailElem = document.createElement('a');
	const photoElem = document.createElement('img');
	const progressContainer = document.createElement('div');
	const progressLine = document.createElement('div');
	const progressValue = document.createElement('p');

	const { name, lastname, email, photo, progress } = event.target;

	nameElem.innerText = `Name: ${name.value} ${lastname.value}`;
	emailElem.innerText = email.value;
	emailElem.href = `mailto:${email}`;
	photoElem.src = photo.value;
	photoElem.alt = 'photo';

	photoElem.classList.add('img');
	cardElem.classList.add('card');

	cardElem.append(
		nameElem,
		emailElem,
		photoElem,
		progressContainer,
		progressLine,
		progressValue
	);
	rootElem.append(cardElem);

	name.value = '';
	lastname.value = '';
	email.value = '';
	photo.value = '';
});
