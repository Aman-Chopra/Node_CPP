var ffi = require('ffi');
var ref = require('ref');

var int = ref.types.int;
var platform = process.platform;
var mathlibLoc = null;
if (platform === 'win32'){
    mathlibLoc = __dirname + './build/Release/math.dll';
}else if(platform === 'linux'){
    mathlibLoc = __dirname + './build/Release/math.so';
}else if(platform === 'darwin'){
    mathlibLoc = __dirname + '/build/Release/math.dylib';
}else{
    throw new Error('unsupported plateform for mathlibLoc')
}
var math = ffi.Library(mathlibLoc, {
    "add": [int, [int, int]],
    "minus": [int, [int, int]],
    "multiply": [int, [int, int]]
});

module.exports = math;