import { createContext } from "react";

export interface RootState {
    case: number,
    lang: string,
}

interface Action {
    type: ActionType,
    payload: number | string,
}

export enum ActionType {
    UPDATE_CASE = "UPDATE_CASE",
    UPDATE_LANG = "UPDATE_LANG",
}

export interface ContextType {
    state: RootState,
    dispatch: React.Dispatch<any>,
}

export const reducer = (state: RootState, action: Action) => {
    if (action.type === ActionType.UPDATE_CASE) {
        return {
            ...state,
            case: action.payload
        }
    }
    if (action.type === ActionType.UPDATE_LANG) {
        return {
            ...state,
            lang: action.payload
        }
    }
    throw Error('Unknown action.');
}

export const initState = {
    case: 1,
    lang: "en",
}

const initContext = {
    state: {
        case: 1,
        lang: "en",
    },
    dispatch: () => { }
}

export const DataContext = createContext<ContextType>(initContext);
