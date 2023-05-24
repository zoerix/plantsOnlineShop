// all data of the plants, name, price, indoor/outdoor etc...
const plants = {
    indoorPlants: [
        {
            id: 1,
            name: "PLANT1",
            price: 25,
            description: "This is plant 1",
            // image:,
            information:
            {type : "indoor",
            water : "2-3x per week"}

        },
        {
            id: 2,
            name: "PLANT2",
            price: 20,
            description: "This is plant 2",
            //image:,
            information:
                {type : "indoor",
                water : "2-3x per week"}
                
        },
    ]
};


const plantsData = JSON.stringify(plants);
export { plantsData };