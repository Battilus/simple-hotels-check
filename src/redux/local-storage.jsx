export const loadLocalState = stateName => {
    try {
        const serializedState = sessionStorage.getItem(stateName);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveLocalState = (state, stateName) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem(stateName, serializedState);
    } catch (err) {
        throw new Error("Can't save changes in browser storage");
    }
};