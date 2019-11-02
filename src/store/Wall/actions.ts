import { LOAD_WALL_REQUEST, LOAD_WALL_SUCCESS, LOAD_WALL_FAIL } from './types'
import { action } from 'typesafe-actions';
//createAsyncAction
export const loadWallAction = () => action(LOAD_WALL_REQUEST, LOAD_WALL_SUCCESS, LOAD_WALL_FAIL);

