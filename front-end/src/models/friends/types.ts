export interface IFriendsStore {
    loading: boolean
    arrayOfFriends: IFriend[]
}

export interface IFriend {
    id: number;
    firstName: string;
    lastName: string;
}