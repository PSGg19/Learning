let array=[10,20,30,40];
console.log(array);
let new_array=[];
array.forEach((num,index) => {
    num=num*num;
    new_array.push(num);
    array[index]=num;
});
console.log(new_array);
console.log(array);
console.log("q2");
let a1=[12, 45, 2, 67, 34];
a2=[...a1].reverse();
console.log(a2);
let mx=Number.MIN_SAFE_INTEGER;
for(let num of a1)
{
    mx=Math.max(mx,num);
}
console.log(mx);
console.log("q3");
let name="prahlad";
let new_name='';
for(ch of name)
{
    console.log(ch);
    new_name=ch+new_name;
}
console.log(new_name);