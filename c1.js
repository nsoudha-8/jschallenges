//challenge1 multiply 2 num
multiply=(a,b)=> a*b;

console.log(multiply(3,5));
console.log(multiply(24,2));

//challenge2 get a planetname using id
getPlanetName=(id)=>{
    var name;
    switch(id){
        case 1:
            name="Mercury";
            break;
        case 2:
            name="Venus";
            break;
        case 3:
            name="Earth";
            break;
        case 4:
            name="Mars";
            break;
        case 5:
            name="Jupiter";
            break;
        case 6:
            name="Saturn";
            break;
        case 7:
            name="Uranus";
            break;
        case 8:
            name="Neptune";
            break;
    }
    return name;
}

console.log(getPlanetName(5));
console.log(getPlanetName(2));

//challenge3 reverse string
a="string";
console.log(a.length);
var b="";
for(var i=a.length-1;i>=0;i--){
b+=a.charAt(i);
}
console.log(b);//gnirts

const arr=[1,2,3,4];
console.log(arr.reverse());//reverse() function for array

reverse=(str)=>str.split("").reverse("").join("");
console.log(reverse("hello"));//olleh

//challenge 4 even or add
evenOrOdd=(n)=>n%2?"odd":"even";

console.log(evenOrOdd(11));//odd
console.log(evenOrOdd(8));//even

//challenge 5 return no.of vowels(a,e,i,o,u)count
vow=(str)=>{
    count=0;
for(var i=0;i<str.length;i++){
    if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'){
count++;
    }
}
return count;
}
console.log(vow("name"));//2
console.log(vow("name is"));//3

//challenge 6 
greet=(name)=>name==="johnny"?"Hello, my Love":"Hello "+name+" !";

/*function greet(name){
    if(name==="johnny")
    return "Hello, my Love";
    else
    return "Hello "+name+" !";
}*/
console.log(greet("everyone"));//hello everyone
console.log(greet("johnny"));//Hello, my Love

//challenge 7: check n divides by both x nd y
divide=(n,x,y)=>n%x==0&&n%y==0?true:false;

console.log(divide(12,6,3));//true
console.log(divide(15,6,3));//false

//challenge8 make -ve
//makeNegative=(n)=>n<0?n:n*(-1);
makeNegative=(n)=>-Math.abs(n);    //Math.abs() return positive value

console.log(makeNegative(-3));//-3
console.log(makeNegative(5));//-5

//challenge 9 return smallest integer
function smallint(arr1){
    let small=arr1[0];
   for(let i=1;i<arr1.length;i++){
    
    if(arr1[i]<small){
        small=arr1[i];
    } 
   }
   return small;
}
console.log(smallint([9,0,3,7,1,-2,8]));//-2


//challenge 10 sum(n)
sum=(n)=>{
    let s=0;
    for(let i=1;i<=n;i++){
        s+=i;
    }
    return s;
}
console.log(sum(5));//15
console.log(sum(10));//55

//challenge 11: average
avg=(score)=>{
    let sum=0;
    let count=score.length;
    for(let i=0;i<count;i++){
        sum+=score[i];
    }
    console.log(sum);//40
    var avrg=Math.floor(sum/count);
    return avrg;
}
console.log(avg([6,7,5,6,8,8]))//6

//challenge 12:Rock paper scissor
rockPaperScissor=(p1,p2)=>{
    let res="";
    if(p1=="rock"&&p2=="rock"||p1=="paper"&&p2=="paper"||p1=="scissor"&&p2=="scissor"){
        res="draw"; 
    }
    else if(p1=="rock"&&p2=="scissor"||p1=="paper"&&p2=="rock"||p1=="scissor"&&p2=="paper"){
        res="player1 won";    
    }
    else if(p2=="rock"&&p1=="scissor"||p2=="paper"&&p1=="rock"||p2=="scissor"&&p1=="paper"){
        res="player2 won";   
    }
    return res;
}

console.log(rockPaperScissor("paper","rock"));//player1 won
console.log(rockPaperScissor("scissor","rock"));//player2 won
console.log(rockPaperScissor("paper","paper"));//draw

//challenge 13:remove first nd last char of string
substring1=(str1)=>{
    return str1.substr(1,str1.length-2);//or str1.slice(1,str1.length-1);
}
console.log(substring1("string"));//trin
console.log(substring1("hello"));//ell

//challenge 14
sumPositive=(arr2)=>{
    let sum=0;
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]<0){
             arr2.splice(i,1); //remove -2,-6 array length will modify or use arr2[i]="";
        }
    }     
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]>=0){
            sum=sum+arr2[i];
        }
    }
    console.log(arr2);//1,2,3,4,5
    return sum; 
}
console.log(sumPositive([1,2,-2,3,-6,4,5]));//15

//challenge 15
operation=(op,a,b)=>{
    let res=0;
    {/*if(op=="+"){
        res=a+b;
    }
    else if(op=="-"){
        res=a-b;
    }
    else if(op=="/"){
        res=a/b;
    }
    else if(op=="*"){
        res=a*b;
    }
return res;*/}

   {/* switch(op){
        case '+':
            res=a+b;
            break;
        case '-':
            res=a-b;
            break;
        case '/':
            res=a/b;
        break;
        case '*':
            res=a*b;
            break;
    }
return res;*/}

let resString=a+op+b;
return eval(resString);//using evalfunction
}
console.log(operation("+",20,10));//30
console.log(operation("-",20,10));//10
console.log(operation("*",20,10));//200
console.log(operation("/",20,10));//2

//challenge 16
repString=(rcount,str)=>{
   {/* let con="";
    for(let i=0;i<rcount;i++){
        con=con+str;
}
return con;*/}
 let x=str.repeat(rcount);
 return x;
}
console.log(repString(3,"hello"));//hellohellohello

//challenge 17 string to array
strtoArray=(str)=>{
    return str.split(" ");
}
console.log(strtoArray("hello"));//[hello]

//challenge 18: remove space btn strings
remSpace=(str)=>{
    return str.split(" ").join("");
}
console.log(remSpace("this string has space between "));//thisstringhasspacebetween

//challenge 19:double the array
doublearr=(arr)=>{
   {/*} for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*2;
    }
    return arr;
*/}
//using map()
const result=arr.map((item)=>{
    return item*2;
});
return result;

}
console.log(doublearr([1,2,3,4,5]));// [2, 4, 6, 8, 10]

//challenge 20: bullet dragon
function hero(bullet,dragon){
return bullet/dragon>=2;

}
console.log(hero(5,2));//true
console.log(hero(3,4));//false

//challenge 21:sum of two array
sumofArray=(arr1,arr2)=>{
    let s1=0,s2=0,sum=0;
    for(let i=0;i<arr1.length;i++){
        s1+=arr1[i];
    }
    for(let j=0;j<arr2.length;j++){
        s2+=arr2[j];
    }
    sum+=s1+s2;
return sum;
}
console.log(sumofArray([1,2,3,4,5],[1,2,3]));//21
console.log(sumofArray([2,3,5],[-2,-3]));//5

//challenge 22: century
century=(year)=>{
    return year%100==0?year/100:Math.ceil(year/100);   
}
console.log(century(1900));//19
console.log(century(1901));//20
console.log(century(81));//1

//challenge 23:human year catyear dogyear
catDogyear=(human)=>{
    let catyear;
    let dogyear;
    if(human==1){
        return [human,15,15];
    }if(human==2){
        return[human,24,24];
    }
    const excessYear=human-2;
    catyear=excessYear*4;
    dogyear=excessYear*5;
    return [human,24+catyear,24+dogyear];
}
console.log(catDogyear(3));//[3,28,29]
console.log(catDogyear(4));//[4,32,34]

//challenge 24:calculate point of our team
points=(gamearr)=>{
    let total=0;
    for(let i=0;i<gamearr.length;i++){
        const value=gamearr[i];  //e.g [2:3,3:4]
        const splt=value.split(":");
        const x=splt[0];
        const y=splt[1];
       if(x>y){
        total+=3;
       }
       else if(x===y){
        total+=1;
       }
    }
    return total;
}
console.log(points(['3:2','3:4','2:2','4:2']));

//challenge 25:counting sheep
countSheep=(sheepArr)=>{
    let temp=[];
    for(let i=0;i<sheepArr.length;i++){
        if(sheepArr[i]==true){
            temp.push(sheepArr[i]);
        }
    }
    return temp.length;
}
console.log(countSheep([true,true,true,false,true,true,false,true,true,true,false]));//8











