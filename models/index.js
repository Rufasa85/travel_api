const Location = require("./Location")
const Traveller = require("./Traveller")
const Trip = require("./Trip")

Location.hasMany(Trip);
Trip.belongsTo(Location,{
    onDelete:"CASCADE"
})

Traveller.hasMany(Trip);
Trip.belongsTo(Traveller,{
    onDelete:"CASCADE"
})

module.exports = {
    Location,
    Traveller,
    Trip
}