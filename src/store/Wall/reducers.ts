import { IWallStore, LOAD_WALL, LOAD_USER } from "./types"
import { WallActionTypes } from "./types";

export const initialStateWall: IWallStore = {
    user: {
        avatar: 'https://sun9-54.userapi.com/c853628/v853628492/11decf/k3UxaHY5Vlw.jpg',
        fio: 'Масленников Сергей Андреевич'
    },
    arrayOfInterests: [{ Name: "программирование" }]
}

export function wallReducer(state: IWallStore = initialStateWall, action: WallActionTypes) {
    switch (action.type) {
        case LOAD_WALL:
            console.log(LOAD_WALL)
            return {
                ...state,
                user: { fio: '123', avatar: 'https://sun9-54.userapi.com/c853628/v853628492/11decf/k3UxaHY5Vlw.jpg' }
            };
        case LOAD_USER:
            return state;
        default:
            return state
    }
};