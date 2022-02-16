


const initialData = [];

function Reducerdata(state = initialData, action) {
    
    console.log('initiliz', action, state);
    switch (action.type) {
        case 'Add Data': 
            return [...state, action.payload];
            case 'Remove Data' : return  [...state].filter((state) => state.GSTINNumber !== action.payload)
            case 'Edit Data' :return state.map((state)=> {
                    if(state.OrganizationCode=== action.payload.OrganizationCode){
                      return action.payload;
                     
                    }else{
                      return state
                    }
                    
                  })
            case 'Filter Data': return action.payload ===''? ([state]):( [...state].filter(state => state.OrganizationName === action.payload))
               // {state.OrganizationName.toLowerCase().includes(action.payload.toLowerCase())
          //  })
            
            default: return state;
    }
    
}

export default Reducerdata