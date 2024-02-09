const {expect} = require('chai');
const {size} = require('../tshirts')

expect(size(37)).equals('S'); 
expect(size(38)).equals('S'); //38 is a size "S"
expect(size(40)).equals('M');
expect(size(41)).equals('M');
expect(size(42)).equals('L');
expect(size(43)).equals('L');
console.log('All is well (maybe!)');
