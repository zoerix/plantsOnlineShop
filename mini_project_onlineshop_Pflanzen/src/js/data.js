

// all data of the plants, name, price, indoor/outdoor etc...
const plants = {
    indoorPlants: [
        {
            id: 1,
            name: "Leuchterpflanze",
            price: 25,
            description: "this beautiful plant has got heart-shaped leafs! its easy to take care of!",
            image: "https://images.unsplash.com/photo-1604396809760-940bda567881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
            information:
            {
                type: "indoor",
                size: "medium",
                light: "lots of light",
                water: "ca 1 x per weeks"
            }

        },
        {
            id: 2,
            name: "Monstera",
            price: 20,
            description: ["This is plant 2"],
            image:"https://images.unsplash.com/photo-1623325943583-d658515e0889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
            information:
            {
                type: "indoor",
                size: "small",
                water: "2-3x per week"
            }

        },
        {
            id: 3,
            name: " Lanzenblättrige Korbmarante",
            price: 15,
            description: "This is plant 3",
            image: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
            information:
            {
                type: "indoor",
                water: "2-3x per week"
            }

        },
    ],

    outdoorPlants: [
        {
            id: 1,
            name: "PLANT1",
            price: 25,
            description: "This is plant 1",
            // image:,
            information:
            {
                type: "outdoor",
                water: "1x per week"
            }

        },
        {
            id: 2,
            name: "PLANT2",
            price: 20,
            description: "This is plant 2",
            //image:,
            information:
            {
                type: "outdoor",
                water: "2x per week"
            }

        },
        {
            id: 3,
            name: "PLANT3",
            price: 15,
            description: "This is plant 3",
            // image:,
            information:
            {
                type: "outdoor",
                water: "1x per week"
            }

        },
    ]

};


const plantsData = JSON.stringify(plants);
export { plantsData };