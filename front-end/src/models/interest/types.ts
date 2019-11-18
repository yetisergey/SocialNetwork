export interface IInterestsStore {
    arrayOfInterests: IInterest[];
    addInputVisible: boolean;
}

export interface IInterest {
    id: number;
    name: string;
}