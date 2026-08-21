// for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element); 
}


for(let i=1;i<4;i++){
    for(let j=1;j<4;j++){
        console.log(i + '*' + j + '=' + i*j);
    }
}


let myArray = [1,2,3,4,5];
for(let i =0; i<myArray.length; i++){
    console.log(myArray[i]);
}


// Break and Continue
for (let i =0 ; i<10;i++){
    if(i==2) {
        console.log("number 2 will not be printed");
        
        continue ;
    }
    if(i==7) {
        console.log("number 7 is detected");
        break;
    }
    console.log(i);

}