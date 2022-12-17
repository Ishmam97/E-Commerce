import {combineReducers , applyMiddleware , legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk'
import loadingReducer from './reducers/loadingReducers'
import messageReducer from './reducers/messageReducers'
import categoryReducer from './reducers/categoryReducers'
import productReducer from './reducers/productReducers'

const reducer = combineReducers({
    loading : loadingReducer,
    messages : messageReducer,
    categories : categoryReducer,
    products: productReducer
})
const initialState = {}
const middleware = [
    thunk
]
const store = createStore(
    reducer ,
    initialState ,
    applyMiddleware(...middleware)
    )
export default store