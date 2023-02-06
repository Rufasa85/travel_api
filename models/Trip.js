const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    // add properites here, ex:
    budget: {
         type: DataTypes.FLOAT
    },
    numTravellers:{
        type:DataTypes.INTEGER,
        validate:{
            min:1
        }
    }
},{
    sequelize
});

module.exports=Trip