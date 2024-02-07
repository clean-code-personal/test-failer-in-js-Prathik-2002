let isActive = true;
let recievedCelcius = undefined
function setIsActive(state){
    isActive = state;
}
function setReceivedCelcius(celcius){
    recievedCelcius = celcius;
}
function getRecievedCelcius(){
    return recievedCelcius;
}
function networkTransmitStub(celcius) {
    if(!isActive){
        console.log('Transmission failure')
        return 500;
    }
    setReceivedCelcius(celcius)
    console.log(`Temperature to transmit: ${celcius} celcius`);

    // The intention here is to transmit the temperature over a network.
    // However, this is a stub, so we just print the message above
    // and give back a return code.

    // Return 200 for ok
    // Return 500 for not-ok
    // This stub always succeeds and returns 200
    return 200;

}
module.exports = {networkTransmitStub, setIsActive, setReceivedCelcius, getRecievedCelcius}