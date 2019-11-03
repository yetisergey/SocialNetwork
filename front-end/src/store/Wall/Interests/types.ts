export const LOAD_INTERESTS_REQUEST = 'LOAD_INTERESTS_REQUEST'
export const LOAD_INTERESTS_SUCCESS = 'LOAD_INTERESTS_SUCCESS'
export const LOAD_INTERESTS_FAIL = 'LOAD_INTERESTS_FAIL'
export const SHOW_ADD_INTEREST = 'SHOW_ADD_INTEREST'
export const ADD_INTEREST_REQUEST = "ADD_INTEREST_REQUEST"
export const ADD_INTEREST_SUCCESS = "ADD_INTEREST_SUCCESS"
export const ADD_INTEREST_FAIL = "ADD_INTEREST_FAIL"
export const HIDE_ADD_INTEREST = "HIDE_ADD_INTEREST"

export interface IInterestsStore {
    arrayOfInterests: Array<IInterest>;
    addInputVisible: boolean;
}

export interface IInterest {
    Id: number;
    Name: string;
}

type InterestsLoadActions = typeof LOAD_INTERESTS_REQUEST |
    typeof LOAD_INTERESTS_SUCCESS |
    typeof LOAD_INTERESTS_FAIL;

type InterestsAddActions =
    typeof ADD_INTEREST_REQUEST |
    typeof ADD_INTEREST_SUCCESS |
    typeof ADD_INTEREST_FAIL;

type InterestsShowAddActions =
    typeof SHOW_ADD_INTEREST |
    typeof HIDE_ADD_INTEREST;

interface IInterestsAddActionTypes {
    type: InterestsAddActions,
    payload: IInterest
}

interface IInterestsLoadActionTypes {
    type: InterestsLoadActions,
    payload: IInterest[]
}

interface IInterestsShowAddTypes {
    type: InterestsShowAddActions
}

export type InterestsActionTypes = IInterestsAddActionTypes | IInterestsLoadActionTypes | IInterestsShowAddTypes