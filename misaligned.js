let color_map = []
let color_map_string = []
function getcolor_map_string(){
    return color_map_string
}
function getcolor_map(){
    return color_map
}
function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const colorPairnumberColorPair = {"paiNumber":(i * 5 + j),"majorColor":majorColors[i],"minorColor":minorColors[j]}
            color_map_string.push(`${colorPairnumberColorPair.paiNumber} | ${colorPairnumberColorPair.majorColor} | ${colorPairnumberColorPair.minorColor}`)
            color_map.push(colorPairnumberColorPair)
        }
    }
    console.log(color_map_string.join("\n"))
    return majorColors.length * minorColors.length;
}
module.exports = {getcolor_map, getcolor_map_string, print_color_map}

