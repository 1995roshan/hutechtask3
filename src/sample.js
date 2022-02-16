
import { useSelector, useDispatch } from "react-redux"
import { addData } from "./action/action"

const Sample=()=>{
const myData=useSelector((state)=> state.reducerdata)
const disppatch=useDispatch()

return (
<div>
<input value={myData}/>
<button onClick={()=>disppatch(addData())}>add </button>

</div>


)

}

export default Sample