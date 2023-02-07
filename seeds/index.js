const sequelize = require("../config/connection.js");
const {Trip,Traveller,Location} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true});
    const locations = await Location.bulkCreate([
        {
            name:"Vancouver"
        },
        {
            name:"Minneapolis"
        },
        {
            name:"New Jersey"
        },
        {
            name:"Cannon Beach"
        },
        {
            name:"Palm Springs"
        }
    ]);

    const travellers = await Traveller.bulkCreate([
        {
            name:"Joe",
            email:"joe@joe.joe"
        },
        {
            name:"Tommy",
            email:"tom@joe.joe"
        },
        {
            name:"Timmy",
            email:"tim@joe.joe"
        },
        {
            name:"Tammy",
            email:"tam@joe.joe"
        },
    ])

    const trips = await Trip.bulkCreate ([
        {
            budget:1200,
            numTravellers:2,
            LocationId:1,
            TravellerId:1
        },
        {
            budget:120,
            numTravellers:20,
            LocationId:1,
            TravellerId:1
        },
        {
            budget:1,
            numTravellers:2,
            LocationId:1,
            TravellerId:2
        },
        {
            budget:100,
            numTravellers:12,
            LocationId:4,
            TravellerId:4
        }
    ])

    console.log("seeded");
    process.exit(1);
}

seed();