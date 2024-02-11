let transmissionFailureCount = 0;
let networkTransmit;

function getTransmissionFailureCount(){
    return transmissionFailureCount;
}

function setNetworkTransmit(func){
    networkTransmit = func
}

function transmitInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    let returnCode
    try{
        returnCode = networkTransmit(celcius);
    }catch{
        returnCode = 404 //Not Found
        throw "Error: Please set the network transmit function"
    }

    if (returnCode != 200) {
        // non-ok response indicates failure while transmitting over the network
        // let us keep a count of failures to report
        // However, this code doesn't increment failures - that's a bug!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        transmissionFailureCount += 1;
    }
}
module.exports = {getTransmissionFailureCount, setNetworkTransmit, transmitInCelcius}
