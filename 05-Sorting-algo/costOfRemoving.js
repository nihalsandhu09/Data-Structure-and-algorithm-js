function CostofRemovingArr(arr){
  let n = arr.length;
     let totalsum = 0;
  for(let i =0;i<n;i++){
    totalsum = totalsum+arr[i];
  }

  let totalCost = 0 ;
     arr.sort((a,b)=> b-a)

     for(let i = 0;i<n;i++){
        totalCost += totalsum;
        totalsum -= arr[i]
     }
     return totalCost;
     
}

 const cost = CostofRemovingArr([4,1,6])
 console.log(cost)