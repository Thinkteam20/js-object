let memberArray = ['egoing','graphittie','leezhce'];
console.group('array loop')
let i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1; 
}
console.groupEnd('array loop');
let memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
console.group('Object loop')
for( let name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('Object loop')