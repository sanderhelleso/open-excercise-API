import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./lib/localStorageHelpers";

const store = createStore(
    rootReducer,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveState(store.getState()));

export default store;
