
const vacationSpots = [
    'Florence, Italy',
    'Copenhagen, Denmark',
    'Instanbul, Turkey'
]
//  (1)     (2)     (3)   (4) 
    for (let i=0 ; i<10 ; i++){
        console.log(i);
    }
//counts by 2
    for (let i=0; i<21; i+=2){
        console.log(i)
    }
//10-0 count down by 1
    for (let i=10; i>-1; i--){
        console.log(i)
    }

//challenge
    for (let i=0; i >= -24; i-=2){
        console.log(i);
    }
//challenge 2
let name = 'Suraj Marakani'
 for (let i=0; i<=name.length; i++){
     console.log(name.charAt(i));
 }
//challenge 3
let x = 0
for (let i=1; i<=50; i++){
    x+=i;
}
console.log(x);
