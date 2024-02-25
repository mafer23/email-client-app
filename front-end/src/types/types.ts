//*----------------------------------------------------------------
//* Types and interfaces app
//*----------------------------------------------------------------

import { MouseEventHandler, ReactNode } from "react";

//* Redux
export type typeAuthSlice = {
    status: string;
    user: {};
    errorMessage: string | undefined
}

export type typeUiSlice = {
    statePanels: boolean[];
}

//* Variables, functions, arrays, etc
export type typeButtonsOptions = {
    id: number;
    name: string;
    icon: string;
    amount: number;
    functionClick: MouseEventHandler<HTMLButtonElement>;
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
}

export type typeMessage = {
    user: string;
    email:string;
    subject: string;
    dateMessage: string;
    message:string;
}