let color_map = []
let color_map_string = []
function getcolor_map_string(){
    return color_map_string
}
function getcolor_map(){
    return color_map
}
function getLengthOfLongestString(list){
    const longestString = list.reduce((a,b) => {
        return a.length > b.length ? a : b;
    })
    return longestString.length
}
function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    const pairNumberSpacing = String(minorColors.length * majorColors.length).length + 1
    const majorColorSpacing = getLengthOfLongestString(majorColors) + 1
    const minorColorSpacing = getLengthOfLongestString(minorColors) + 1

    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const PairnumberColorPairMap = {"pairNumber":(i * 5 + j + 1),"majorColor":majorColors[i],"minorColor":minorColors[j]}
            const pairNumberAlignedString = String(PairnumberColorPairMap.pairNumber).padEnd(pairNumberSpacing)
            const majorColorAlignedString = (PairnumberColorPairMap.majorColor).padEnd(majorColorSpacing)
            const minorColorAlignedString = (PairnumberColorPairMap.minorColor).padEnd(minorColorSpacing)
            color_map_string.push(`${pairNumberAlignedString}| ${majorColorAlignedString}| ${minorColorAlignedString}`)
            color_map.push(PairnumberColorPairMap)
        }
    }
    console.log(color_map_string.join("\n"))
    return majorColors.length * minorColors.length;
}
module.exports = {getcolor_map, getcolor_map_string, print_color_map}

