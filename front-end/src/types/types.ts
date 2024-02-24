//*----------------------------------------------------------------
//* Types and interfaces app
//*----------------------------------------------------------------

//! Redux
export type typeAuthSlice = {
    status: string;
    user: {};
    errorMessage: string | undefined
}

//! Variables, functions, arrays, etc
export type typeButtonsOptions = {
    id: number;
    name: string;
    icon: string;
    amount: number
}