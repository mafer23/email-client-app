import { DataMessagesUser, Received, User, typeEmailSlice } from '../../src/types/types';

export const initialStateEmailSlice: typeEmailSlice = {
    emailsReceived: [], 
    emailSent: [], 
    emailsUsers: [], 
    selectedEmail: undefined,
    isLoading: false 
}

export const initialStateEmailsUser: typeEmailSlice = {
    emailsReceived: [
        {
            email: {
                body: 'Contenido de prueba No.3',
                createdAt: new Date(),
                emailId: 3,
                subject: 'Instalación contenido No.3',
            },
            user: {
                firstName: 'Jonathan',
                lastName: 'Incapie',
                userId: 3,
                userName: 'jonathan@gmail.com'
            }
        },
    ], 
    emailSent: [
        {
            email: {
                body: 'Contenido de prueba No.1',
                createdAt: new Date(),
                emailId: 1,
                subject: 'Instalación contenido No.1',
            },
            user: {
                firstName: 'Carlos',
                lastName: 'Mosquera',
                userId: 1,
                userName: 'carlos@gmail.com'
            }
        },
        {
            email: {
                body: 'Contenido de prueba No.2',
                createdAt: new Date(),
                emailId: 2,
                subject: 'Instalación contenido No.2',
            },
            user: {
                firstName: 'Camila',
                lastName: 'Perea',
                userId: 2,
                userName: 'camila@gmail.com'
            }
        }
    ], 
    emailsUsers: [], 
    selectedEmail: undefined,
    isLoading: false 
}

export const initialStateSelectedEmail: typeEmailSlice = {
    emailsReceived: [], 
    emailSent: [], 
    emailsUsers: [], 
    selectedEmail: {
        email: {
            body: 'Contenido de prueba No.1',
            createdAt: new Date(),
            emailId: 1,
            subject: 'Instalación contenido No.1',
        },
        user: {
            firstName: 'Carlos',
            lastName: 'Mosquera',
            userId: 1,
            userName: 'carlos@gmail.com'
        }
    },
    isLoading: false 
}

export const initialStateGetEmailsUser: typeEmailSlice = {
    emailsReceived: [], 
    emailSent: [], 
    emailsUsers: [
        { value: 1, label: 'carlos@gmail.com' },
        { value: 2, label: 'camila@gmail.com' }
    ], 
    selectedEmail: undefined,
    isLoading: false 
}

export const initialStateEmailSliceComplete: typeEmailSlice = {
    emailsReceived: [
        {
            email: {
                body: 'Contenido de prueba No.3',
                createdAt: new Date(),
                emailId: 3,
                subject: 'Instalación contenido No.3',
            },
            user: {
                firstName: 'Jonathan',
                lastName: 'Incapie',
                userId: 3,
                userName: 'jonathan@gmail.com'
            }
        },
    ], 
    emailSent: [
        {
            email: {
                body: 'Contenido de prueba No.1',
                createdAt: new Date(),
                emailId: 1,
                subject: 'Instalación contenido No.1',
            },
            user: {
                firstName: 'Carlos',
                lastName: 'Mosquera',
                userId: 1,
                userName: 'carlos@gmail.com'
            }
        },
        {
            email: {
                body: 'Contenido de prueba No.2',
                createdAt: new Date(),
                emailId: 2,
                subject: 'Instalación contenido No.2',
            },
            user: {
                firstName: 'Camila',
                lastName: 'Perea',
                userId: 2,
                userName: 'camila@gmail.com'
            }
        }
    ],
    emailsUsers: [
        { value: 1, label: 'carlos@gmail.com' },
        { value: 2, label: 'camila@gmail.com' }
    ], 
    selectedEmail: {
        email: {
            body: 'Contenido de prueba No.1',
            createdAt: new Date(),
            emailId: 1,
            subject: 'Instalación contenido No.1',
        },
        user: {
            firstName: 'Carlos',
            lastName: 'Mosquera',
            userId: 1,
            userName: 'carlos@gmail.com'
        }
    },
    isLoading: false 
}

//TODO: Array data

export const demoEmailSent: Received[] = [
    {
        email: {
            body: 'Contenido de prueba No.1',
            createdAt: new Date(),
            emailId: 1,
            subject: 'Instalación contenido No.1',
        },
        user: {
            firstName: 'Carlos',
            lastName: 'Mosquera',
            userId: 1,
            userName: 'carlos@gmail.com'
        }
    },
    {
        email: {
            body: 'Contenido de prueba No.2',
            createdAt: new Date(),
            emailId: 2,
            subject: 'Instalación contenido No.2',
        },
        user: {
            firstName: 'Camila',
            lastName: 'Perea',
            userId: 2,
            userName: 'camila@gmail.com'
        }
    }
];

export const demoEmailReceived: Received[] = [
    {
        email: {
            body: 'Contenido de prueba No.3',
            createdAt: new Date(),
            emailId: 3,
            subject: 'Instalación contenido No.3',
        },
        user: {
            firstName: 'Jonathan',
            lastName: 'Incapie',
            userId: 3,
            userName: 'jonathan@gmail.com'
        }
    },
]

export const demoEmailsUser: DataMessagesUser = {
    sent: demoEmailSent,
    received: demoEmailReceived
}

export const demoEmailsUsers: User[] = [
    {
        firstName: 'Camila',
        lastName: 'Perea',
        userId: 2,
        userName: 'camila@gmail.com'
    },
    {
        firstName: 'Carlos',
        lastName: 'Mosquera',
        userId: 1,
        userName: 'carlos@gmail.com'
    }
]