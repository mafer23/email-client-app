type typeInitialStateAuth = {
    status: string;
    user: {
        userId: number,
        userName: string,
        firstName: string,
        lastName: string,
        password: string
    },
    errorMessage: string | undefined;
}

export const initialStateAuth: typeInitialStateAuth = {
    status: 'no-authenticated', //authenticated, checking, no-authenticated
    user: {
        userId: 0,
        userName: "",
        firstName: "",
        lastName: "",
        password: ""
    },
    errorMessage: undefined
}

export const stateAuthenticated: typeInitialStateAuth = {
    status: 'authenticated',
    user: {
        userId: 1,
        userName: "mateo.olaya@gmail.com",
        firstName: "Mateo",
        lastName: "Olaya",
        password: ""
    },
    errorMessage: undefined
}

export const stateNoAuthenticated: typeInitialStateAuth = {
    status: 'no-authenticated',
    user: {
        userId: 0,
        userName: "",
        firstName: "",
        lastName: "",
        password: ""
    },
    errorMessage: undefined
}

export const stateNoAuthenticatedWithError: typeInitialStateAuth = {
    status: 'no-authenticated',
    user: {
        userId: 0,
        userName: "",
        firstName: "",
        lastName: "",
        password: ""
    },
    errorMessage: 'credentials error'
}

export const demoUser = {
    userId: 1,
    userName: "mateo.olaya@gmail.com",
    firstName: "Mateo",
    lastName: "Olaya",
    password: ""
}