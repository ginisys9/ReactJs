import { useState } from "react";
export default function useToggle(initialValue = false){
  var  [value,setValue] = useState(initialValue),
   toggle = function(){
    return setValue(pre=> !pre)
   };
   return [value,toggle]
}