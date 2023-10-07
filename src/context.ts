import { createContext } from 'react';

export interface RootState {
  case: number;
  lang: string;
  startDate: string;
  endDate: string;
}

interface Action {
  type: ActionType;
  payload: number | string;
}

export enum ActionType {
  UPDATE_CASE = 'UPDATE_CASE',
  UPDATE_LANG = 'UPDATE_LANG',
  UPDATE_START_DATE = 'UPDATE_START_DATE', // Add an action type for startDate
  UPDATE_END_DATE = 'UPDATE_END_DATE', // Add an action type for endDate
}

export interface ContextType {
  state: RootState;
  dispatch: React.Dispatch<any>;
}

export const reducer = (state: RootState, action: Action) => {
  if (action.type === ActionType.UPDATE_CASE) {
    return {
      ...state,
      case: action.payload,
    };
  }
  if (action.type === ActionType.UPDATE_LANG) {
    return {
      ...state,
      lang: action.payload,
    };
  }
  if (action.type === ActionType.UPDATE_START_DATE) {
    return {
      ...state,
      startDate: action.payload,
    };
  }
  if (action.type === ActionType.UPDATE_END_DATE) {
    return {
      ...state,
      endDate: action.payload,
    };
  }
  throw Error('Unknown action.');
};

export const initState = {
  case: 1,
  lang: 'en',
  startDate: '',
  endDate: '',
};

const initContext = {
  state: {
    case: 1,
    lang: 'en',
    startDate: '',
    endDate: '',
  },
  dispatch: () => {},
};

export const DataContext = createContext<ContextType>(initContext);
