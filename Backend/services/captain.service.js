const captainModel = require('../models/captain.model');

exports.registerCaptain = async ({firstname, lastname, email, password, color, plate, capacity, vehicleType })=>{
    if(!email || !password || !firstname || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        fullname : {
            firstname ,
            lastname 
        },
        email ,
        password ,
        vehicle : {
            color ,
            plate ,
            capacity ,
            vehicleType
        }
    });
    return captain;
}

exports.loginCaptain = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }
    const captain = await captainModel.findOne({email}).select('+password');
    if (!captain) {
        throw new Error('Captain not found');
    }
    return captain;
}