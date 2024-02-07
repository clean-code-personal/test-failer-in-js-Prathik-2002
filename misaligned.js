let color_map = ""
function getcolor_map(){
    return color_map
}
function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            color_map += `${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}\n`;
        }
    }
    console.log(color_map);
    return majorColors.length * minorColors.length;
}
module.exports = {getcolor_map, print_color_map}

