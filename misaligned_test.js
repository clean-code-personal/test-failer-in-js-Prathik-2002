const {expect} = require('chai')
const {getcolor_map, print_color_map} = require("./misaligned");;
function testPairNumberColorPair(pairNumber, majorColor, minorColor){
    if(pairNumber<1 || pairNumber>25){
        return false
    }
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    if(majorColor == majorColors[(pairNumber - 1)/ majorColors.length] && minorColor == minorColors[(pairNumber - 1)% minorColors.length]){
        return true
    }
    return false
}
function testUniqueColorPair(colorMap){
    for( const color in colorMap ){
        console.log(colorMap.indexOf(color) != colorMap.lastIndexOf(color))
        if(colorMap.indexOf(color) != colorMap.lastIndexOf(color)){
            return false
        }
    }
    return true
}

result = print_color_map();
console.log(getcolor_map())
expect(result).equals(25);
console.log("25")
expect(testUniqueColorPair(getcolor_map())).equals(true);
console.log("uniue")
getcolor_map().forEach(element=>{
    expect(testPairNumberColorPair(element.pairNumber,element.majorColor,element.minorColor)).equals(true)
})

console.log('All is well (maybe!)');