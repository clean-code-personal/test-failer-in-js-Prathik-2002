const {getTransmissionFailureCount, transmitInCelcius} = require("./transmitter")
const {setIsActive, setReceivedCelcius, getRecievedCelcius}  = require("./stub")
const {expect} = require("chai")

setIsActive(true)
transmitInCelcius(400.5);
expect(getRecievedCelcius()).equals(204.72222222222223)
transmitInCelcius(303.6);
expect(getRecievedCelcius()).equals(150.88888888888889)


//Transmission failure
setIsActive(false)
transmitInCelcius(300);
expect(getTransmissionFailureCount()).equals(1)
console.log(`Transmission failed ${getTransmissionFailureCount()} times.`);
console.log('All is well (maybe!)');