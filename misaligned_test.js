const {expect} = require('chai')
const {getcolor_map, print_color_map} = require("./misaligned");;
result = print_color_map();
expect(result).equals(25);

console.log('All is well (maybe!)');

function split_color_map_into_object(color_map){
    const split_color = color_map.split("\n")
    console.log(split_color)
}
split_color_map_into_object(result)

function testPairNumberColorPair(pairNumber, majorColor, minorColor){
    
}