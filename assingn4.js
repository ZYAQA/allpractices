let array=[1,2,3,4,5,2,6,7];
num=2;
for(i=0;i<array.length;i++){
    if(i===num){
        array.splice(i,1);
    }
}
let number="12344";
let count= number.length();
let digits=123;
let  add=0;
for(i=0;i<digits.length();i++){
    add=add+digits[i];
}
console.log(add);
let numm=prompt("enter no to find factorial");
let fac=1;
for(i=1;i=numm;i++){
    fac=fac*i;
}
console.log(fac);
let arr=[12,34,34,23,56];
let greater=0;
for(i=0;i<arr.length();i++){
    if(arr[i]>greater){
        greater=arr[i];
    }
}
console.log(greater)