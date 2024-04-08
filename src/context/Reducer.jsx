

const reducer = (state , action) => {

switch (action.type) {
    case "PURE-DATA":
        return {...state , pureData:action.payload};
    default:
        return state     
}
 
   
}

export default reducer
