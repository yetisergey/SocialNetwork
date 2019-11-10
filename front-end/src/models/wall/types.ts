import { IUser } from "../user/types";
import { IInterestsStore } from "../interest/types";

export interface IWallStore {
    user: IUser;
    interests: IInterestsStore
}