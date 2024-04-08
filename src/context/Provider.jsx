import { createContext, useReducer } from "react"
import { useContext} from 'react';
import reducer from './Reducer';

const Context = createContext()
const Provider = (Props) => {
  
const intialState={
  pureData:[],

}

  const [state , dispatch]= useReducer(reducer,intialState);
  // console.log(state.name1)
  return (
    <Context.Provider value={{...state , dispatch}}>
     {Props.children}
    </Context.Provider>
    
  )
}
const GlobalContext = ()=>{
return useContext(Context);
}

export {GlobalContext,Provider};
