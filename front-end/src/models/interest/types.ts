export interface IInterestsStore {
    arrayOfInterests: Array<IInterest>;
    addInputVisible: boolean;
}

export interface IInterest {
    Id: number;
    Name: string;
}