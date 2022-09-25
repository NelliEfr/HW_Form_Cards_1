// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку".
// Email должен быть кликабельным.
// Фото должно отображаться.
// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.
// После отправки необходимо очистить инпуты.

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const container = document.querySelector(".container");
  const { firstname, lastname, email, image, progress } = event.target;

  const card = document.createElement("div");
  card.classList.add("card");
  const fistnameElem = document.createElement("p");
  const lastnameElem = document.createElement("p");
  const emailElem = document.createElement("a");
  emailElem.classList.add("email");
  const emailSpan = document.createElement("span");
  const imgElem = document.createElement("img");
  imgElem.src = image.value;
  const progressContaier = document.createElement("div");
  progressContaier.classList.add("progress");
  const progressStatus = document.createElement("div");
  const progressValue = document.createElement("p");

  let color = "lightskyblue";
  if (progress.value <= 20) color = "red";
  else if (progress.value >= 75) color = "green";
  progressStatus.style.background = color;
  progressStatus.style.width = progress.value + "%";
  progressValue.innerText = progress.value + "%";

  progressContaier.append(progressStatus, progressValue);

  fistnameElem.innerText = `First Name: ${firstname.value}`;
  lastnameElem.innerText = `Last Name: ${lastname.value}`;
  emailSpan.innerText = "Email: ";
  emailElem.href = `mailto:${email.value}`;
  emailElem.innerText = `${email.value}`;
  card.append(
    fistnameElem,
    lastnameElem,
    emailSpan,
    emailElem,
    imgElem,
    progressContaier
  );
  container.append(card);
  // firstname.value = "";
  // lastname.value = "";
  // email.value = "";
  // image.value = "";
  // progress.value = "";
});

// Version 2:

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { firstname, lastname, email, image, progress } = event.target;
  console.log(image.value);
  console.log(email.value);
  const container = document.querySelector(".container");
  let color = "lightskyblue";
  if (progress.value <= 20) color = "red";
  else if (progress.value >= 75) color = "green";
  container.innerHTML += `
      <div class="card">
        <p>First Name: ${firstname.value}</p>
        <p>Last Name: ${lastname.value}</p>
        <span>Email:</span><a href="mailto:${email.value}"> ${email.value}</a>
        <img src="${image.value}" alt="">
        <div class="progress">
            <div style="width: ${progress.value}%; background: ${color}"></div>
            <p>${progress.value}%</p>
        </div>
      </div>`;
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  image.value = "";
  progress.value = "";
});
