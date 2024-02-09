const {expect} = require('chai')
const {getcolor_map, getcolor_map_string, print_color_map} = require("../misaligned");;
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
        if(colorMap.indexOf(color) != colorMap.lastIndexOf(color)){
            return false
        }
    }
    return true
}
function getSeparatorPosition(colorString){
    return [colorString.indexOf("|"), colorString.lastIndexOf("|")]
}
function testAllAlignmentsBasedOnFirstRow(colorMapString){
    const positionOfIrstSeparatorInFirstRow = colorMapString[0].indexOf("|")
    const positionOfSecondSeparatorInFirstRow = colorMapString[0].lastIndexOf("|")
    colorMapString.forEach(color =>{
        const separatorPosition = getSeparatorPosition(color)
        expect(positionOfIrstSeparatorInFirstRow).equals(separatorPosition[0])
        expect(positionOfSecondSeparatorInFirstRow).equals(separatorPosition[1])
    
    })
}



result = print_color_map();
expect(result).equals(25);
testAllAlignmentsBasedOnFirstRow(getcolor_map_string())
expect(testUniqueColorPair(getcolor_map())).equals(true);
getcolor_map().forEach(element=>{
    expect(testPairNumberColorPair(element.pairNumber,element.majorColor,element.minorColor)).equals(true)
})
console.log('All is well (maybe!)');