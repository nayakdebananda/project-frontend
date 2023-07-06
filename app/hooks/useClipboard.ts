import { useState } from "react"

function useClipboard() {
  const [value, setValue] = useState("")
   function copy(val:string){
    navigator.clipboard.writeText(val);
    setValue(val)
  }
  return [value, copy]
}

export default useClipboard