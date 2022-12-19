let x = [3,1,7,9];
let y = [2,4,1,9,3];
let outcome = 0;
for ( let i = 0; i < x.length; i++){
  let isDistinct= true
  for (let j = 0; j < y.length; j++){
    if (x[i]==y[j]){
     isDistinct= false
    }
    }
    if (isDistinct == true){
      outcome += x[i];
    }
}

for ( let i = 0; i < y.length; i++){
  let isDistinct= true
  for (let j = 0; j < x.length; j++){
    if (y[i]==x[j]){
     isDistinct= false
    }
    }
    if (isDistinct == true){
      outcome += y[i];
    }
}