const {expect} = require('chai')
const {getcolor_map, print_color_map} = require("./misaligned");;
function testPairNumberColorPair(pairNumber, majorColor, minorColor){
    if(pairNumber<1 || pairNumber>25){
        return false
    }
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    if(majorColor == majorColors[(pairNumber - 1)/ 5] && minorColor == minorColors[(pairNumber - 1)%5]){
        return true
    }
    return false
}
function testUniqueColorPair(colorMap){
    colorMap.forEach(colorPair => {
        if(colorMap.indexOf(colorPair) != colorMap.toReversed().indexOf(colorPair)){
            return false
        }
    })
    return true
}


result = print_color_map();
expect(result).equals(25);
getcolor_map().forEach(element=>{
    expect(testPairNumberColorPair(element.pairNumber,element.majorColor,element.minorColor)).equals(true)
})
expect(testUniqueColorPair(getcolor_map())).equals(true);

console.log('All is well (maybe!)');