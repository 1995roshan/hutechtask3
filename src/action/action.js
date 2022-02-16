


export const addData =(oneData)=> {
console.log('action' ,oneData )

return{
    type:'Add Data',
    payload: oneData ,
    
}

}
export const removeData= (key)=> {
    console.log('action del' ,key )
return{
type:'Remove Data',
payload: key,

}


}
export const editData= (key)=> {
    console.log('action edit' ,key )
return{
type:'Edit Data',
payload: key,

}


}

export const filterData= (value)=> {
    console.log('action filter' ,value )
return{
type:'Filter Data',
payload: value,
}

}