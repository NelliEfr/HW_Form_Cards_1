const form = document.querySelector(".form");
const root = document.querySelector(".root");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const lastNameElem = document.createElement("p");
  const emailElem = document.createElement("a");
  const foto = document.createElement("img");
  const progresDiv = document.createElement("div");
  const progresDivElem = document.createElement("div");

  foto.classList.add("foto");
  progresDiv.classList.add("prog");
  progresDivElem.classList.add("progShow");
  card.classList.add("card");

  const { name, lastName, email, photo } = event.target;

  nameElem.innerText = `Name: ${name.value}`;
  lastNameElem.innerText = `Lastname: ${lastName.value}`;
  emailElem.innerText = `Email: ${email.value}`;
  foto.setAttribute("src", photo.value);
  foto.setAttribute("alt", "photo");

  progresDiv.append(progresDivElem);
  card.append(nameElem, lastNameElem, emailElem, foto, progresDiv);
  root.append(card);

  name.value = "";
  lastName.value = "";
  email.value = "";
});
