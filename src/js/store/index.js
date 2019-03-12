import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
export default store;




/* As you can see from the code above, store is the result of createStore which in turn is a function from the redux library.

createStore takes a reducer as the first argument and in our case we passed in rootReducer. */