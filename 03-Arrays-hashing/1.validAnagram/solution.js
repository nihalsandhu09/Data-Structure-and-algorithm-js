
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.







// Brute force slutiion  


var isAnagram = function(s, t) { 
    if(s.length !== t.length){
       return false;
    }
       let arr = Array.from(s);
       let arr2 = Array.from(t)
       
       arr.sort()
       arr2.sort()
    
       console.log(arr)
       console.log(arr2)
      
       for(let  i =0;i<arr.length-1;i++){
          if(arr[i] !== arr2[i]){
           return false
          }
       }
       return true;;
   }
   
   
   
   
   console.log(isAnagram("anagram" , "nagaram"))
   console.log(isAnagram("rat" , "car"))





//    optimal solution using hashmap 


var isAnagram = function(s, t){
  
    if(s.length !== t.length){
        return false;
    }


    const mp = {}

    for(let i =0;i<s.length;i++){
 
      if(mp[s[i]] ){
        // if it is defined we land here 
        mp[s[i]] += 1;
      }else{
        // if it is undefined we land here 
        mp[s[[i]]] = 1;
      }
         
    }

     // this loop matches the characters inside the string t, with the map
     for(let i = 0; i<t.length;i++){
   if(mp[t[i]] === undefined){
    return false;
   }else{
    mp[t[i]] -= 1;
    if(mp[t[i]] == 0){
        delete mp[t[i]];
    }
   }
     }
return Object.keys(mp).length == 0;

}
