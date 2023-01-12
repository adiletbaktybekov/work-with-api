export interface IUsersState {
    users: IUsers[]
}

export interface IUsers {
    id: number,
    name: string,
    age: string | number
}
