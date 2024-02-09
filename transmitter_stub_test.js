const {getTransmissionFailureCount, setNetworkTransmit, transmitInCelcius} = require("./transmitter")
const {networkTransmitStub, setIsActive, getRecievedCelcius}  = require("./stub")
const {expect} = require("chai")
function testCelciusValue(actual, expected, precision){
    expect(actual.toFixed(precision)).equals(expected.toFixed(precision))

}
//connect stub ad transmitter
setNetworkTransmit(networkTransmitStub)

let roundOfToDecimals = 4

setIsActive(true)
transmitInCelcius(400.5);
testCelciusValue(getRecievedCelcius(),204.72222222,roundOfToDecimals)
transmitInCelcius(303.6);
testCelciusValue(getRecievedCelcius(),150.88888889,roundOfToDecimals)
//Transmission failure
setIsActive(false)
transmitInCelcius(300);
expect(getTransmissionFailureCount()).equals(1)
console.log(`Transmission failed ${getTransmissionFailureCount()} times.`);
console.log('All is well (maybe!)');