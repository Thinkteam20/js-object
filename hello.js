let memberArray = ['egoing','graphittie','leezhce'];

console.log("memberArray[1] =",memberArray[1]);

// 각각의 데이터가 어떤 정보인지 디테일하게 보여줘야할때 

let memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
memberObject.designer = 'leezche' // modify 
console.log(memberObject.designer)
console.log(memberObject["designer"])

delete memberObject.manager
console.log(memberObject.manager);