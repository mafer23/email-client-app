//*----------------------------------------------------------------
//* Types and interfaces app
//*----------------------------------------------------------------

import { MouseEventHandler, ReactNode } from "react";

//* Redux
export type typeDataUser = {
    userId: number;
    userName: string;
    firstName: string;
    lasttName: string;
    password: string;
}

export type typeAuthSlice = {
    status: string;
    user: typeDataUser | {};
    errorMessage: string | undefined;
}

export type typeUiSlice = {
    statePanels: boolean[];
    previousPanelStatus: undefined | boolean[];
    messageModal: boolean;
}

export type typeEmailSlice = {
    emailsReceived: [];
    emailSent: [];
    selectedEmail: undefined | {};
    emailsUsers: [];
    isLoading: boolean;
}

//* Variables, functions, arrays, etc
export type typeButtonsOptions = {
    id: number;
    name: string;
    icon: string;
    amount: number;
    functionClick: MouseEventHandler<HTMLButtonElement>;
}

export type typeLoginUser = {
    email: string;
    password: string;
}

//* Components
export type typeLayoutPanel = {
    title: string;
    isOpenMessage: boolean;
    children: ReactNode;
}

export type typeMessageCard = {
    recipient: string;
    subject: string;
    dateMessage: string;
    namePanel?: string;
}

export type typeMessage = {
    user: string;
    email:string;
    subject: string;
    dateMessage: string;
    message:string;
}