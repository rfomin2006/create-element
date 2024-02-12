const root = document.getElementById('root');
data = [
  {
    mark: 'Subaru',
    model: 'Forester',
    description: 'Some long description about Subaru Forester'
  },
  {
    mark: 'Toyota',
    model: 'Camry',
    description: 'Some long description about Toyota Camry'
  }
]

// data.map(car => {
//   const card = document.createElement('div');
//   card.classList.add('card');
//   const description = document.createElement('div');
//   description.classList.add('inactive');
//   card.innerHTML =
//   `
//   <div class="header">
//     <h3>${car.mark}</h3>
//     <h3>${car.model}</h3>
//   </div>
//   `;
//   description.innerHTML = `<p>${car.description}</p>`

//   card.addEventListener('click', () => {
//     description.classList.toggle('inactive');
//     console.log("card clicked")
//   })

//   card.appendChild(description);
//   root.appendChild(card);
// });


const createCard = (data) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML =
  `
  <h3>${data.mark}</h3>
  <h3>${data.model}</h3>
  `;
  const description = document.createElement('div');
  description.classList.add('description');
  description.innerHTML =
  `
  <div class="inner">
  <div>${data.description}</div>
  </div>
  `;
  card.appendChild(description);

  const delBtn = document.createElement('button');
  delBtn.innerText = "delete";
  card.appendChild(delBtn);
  delBtn.addEventListener('click', (ev) => {
    ev.stopPropagation();
    card.remove();
  }, true);

  card.addEventListener('click', () => {
    description.classList.toggle('active');
    console.log("hello");
  });

  return card;
}

data.map(el => {
  const newCard = createCard(el);
  root.appendChild(newCard);
  root.prepend(newCard);
});
