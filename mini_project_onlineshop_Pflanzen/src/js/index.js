import { plantsData } from "./data.js";
//console.log(plantsData);

const dataObj = JSON.parse(plantsData);
console.log(Object.entries(dataObj));

//const sections = document.querySelectorAll('.sections');


//für jedes element im platnsdataObj wird eine card erstellt & elemnte hinzugefügt
Object.entries(dataObj).forEach((entryCards) => {
    console.log(entryCards);
    const plants = [document.getElementById("indoor"),
    document.getElementById("outdoor"),
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
                // cardImg.style.objectFit= 'cover';

                let cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                let cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = card.name;

                let cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = card.description;

                let cardPrice = document.createElement('p');
                cardPrice.className = 'card-text';
                cardPrice.textContent = card.price;

                let cardInformation = document.createElement('p');
                cardInformation.className = 'card-information';
                cardInformation.textContent = card.information.type;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardPrice);

                cardDiv.appendChild(cardImg);
                cardDiv.appendChild(cardBody);
                section.appendChild(cardDiv);
            }
        });
    });
});




// //div: background img aus data.js => damit alle gleich groß sind height/width bei allen gleich


// //NAV DROPDROWN
const dropdownElements = document.querySelectorAll('.dropdown');

dropdownElements.forEach((dropdownElement) => {
    const dropdownContentElement = dropdownElement.querySelector('.dropdown-content');

    dropdownElement.onclick = () => {
        if (dropdownContentElement.style.display = 'none') {
            dropdownContentElement.style.display = 'block';
        }
        else { dropdownContentElement.style.display = 'none'; }
    };
});

