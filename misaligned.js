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
    let minor_majorColorSpacing =  majorColors.reduce((a, b) => {
            return a.length > b.length ? a : b; //finds longest string in the list
        }).length + 1;
    let pairNumberSpacing = String(minorColors.length * majorColors.length).length + 1
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const PairnumberColorPair = {"pairNumber":(i * 5 + j + 1),"majorColor":majorColors[i],"minorColor":minorColors[j]}
            color_map_string.push(String(PairnumberColorPair.pairNumber).padEnd(pairNumberSpacing) + "| " + (PairnumberColorPair.majorColor).padEnd(minor_majorColorSpacing) + "| " + (PairnumberColorPair.minorColor).padEnd( minor_majorColorSpacing))
            color_map.push(PairnumberColorPair)
        }
    }
    console.log(color_map_string.join("\n"))
    return majorColors.length * minorColors.length;
}
module.exports = {getcolor_map, getcolor_map_string, print_color_map}

