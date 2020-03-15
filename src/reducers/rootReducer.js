const initialState = {
    weatherData:[],responseData:[]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATEDATA":
            return{
                ...state,
                weatherData:action.weatherData
            } 
        case "UPDATERESPONSE" :
            return{
                ...state,
                responseData:action.responseData
            }    
        default:
            return state
    }
}
