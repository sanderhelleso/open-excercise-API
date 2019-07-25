/**
 *  incase of privacy mode, use try catch, if not existing or not avaialble
 *  return undefined for reducers to initialize the application
 */

export function loadState() {
    try {
        const serializedState = localStorage.getItem("state");
        if (!serializedState) return undefined;

        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}

export function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (error) {
        console.log(error);
    }
}
