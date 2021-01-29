//console.log(Math.PI);

//console.log("Math.random() =", Math.random());
//console.log("Math.random() =", Math.floor(Math.random()*5))

//객체 만들어보기 

let MyMath ={
    //properties 
    PI: Math.PI,
    //method
    random: function(){
        return Math.random();
    },
    floor: function(val){
        return Math.floor(val)
    }
};

console.log("MyMath.PI = ",MyMath.PI)
console.log("MyMath.random() =",MyMath.random())

MyMath_PI = Math.PI;
//console.log(MyMath_PI)

