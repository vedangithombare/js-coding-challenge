function GetFreq(arr) {
  // object->ket->value-->if value present add 1 if not initalise it with 0

  /* if (Object.keys(obj).includes(arr[i])) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[1]] = 0;
    }
      
     if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]] = obj[arr[i]] + 1;
  }
    
    */

  /* check if the array value is present as a key in the object if it then increment the value count if not initialse it to 0*/
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]] = obj[arr[i]] + 1;
  }
  return obj;
}
console.log(GetFreq([1, 1, 2, 2, 3, 3, 3]));
