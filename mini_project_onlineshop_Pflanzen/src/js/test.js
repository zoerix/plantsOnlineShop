import { plantsData } from "./data.js";

const dataObj = JSON.parse(plantsData);
console.log(Object.entries(dataObj));

Object.entries(dataObj).forEach((entryCards) => {
  console.log(entryCards);
  const plants = [
    document.getElementById("indoor"),
    document.getElementById("outdoor")
  ];
  //console.log(plants);

  entryCards[1].forEach((card) => {
    console.log(card);
    plants.forEach((section) => {
      if (card.information.type === section.id) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.style.width = '18rem';

        let cardImg = document.createElement('img');
        cardImg.src = card.image;
        cardImg.alt = card.name;
        cardImg.className = 'card-image';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = card.name;

        let cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = card.description;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBody);

        section.appendChild(cardDiv);
      }
    });
  });
});
