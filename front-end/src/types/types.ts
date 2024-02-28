//*----------------------------------------------------------------
//* Types and interfaces app
//*----------------------------------------------------------------

import { MouseEventHandler, ReactNode } from "react";

//* Redux
export type typeDataUser = {
    userId: number;
    userName: string;
    firstName: string;
    lastName: string;
    password?: string;
}

export type typeAuthSlice = {
    status: string;
    user: typeDataUser;
    errorMessage: string | undefined;
}

export type typeUiSlice = {
    statePanels: boolean[];
    previousPanelStatus: undefined | boolean[];
    messageModal: boolean;
}

export type typeEmailSlice = {
    emailsReceived: Received[] | [];
    emailSent: Received[] | [];
    selectedEmail: Received | undefined;
    emailsUsers: {value: number, label: string}[];
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

export type typeDataMessage = {
    sender: number;
    recipient: number;
    subject: string;
    body: string;
    createdAt?: Date;
}

export interface DataMessagesUser {
    sent:     Received[];
    received: Received[];
}

export interface Received {
    email: Email;
    user:  User;
}

export interface Email {
    emailId:   number;
    subject:   string;
    body:      string;
    createdAt: Date;
}

export interface User {
    userId:    number;
    userName:  string;
    firstName: string;
    lastName:  string;
}

export interface DataNewMessage {
    email:     Email[];
    sender:    User[];
    recipient: User[];
}

//* Components
export type typeLayoutPanel = {
    title: string | undefined;
    isOpenMessage: boolean;
    children: ReactNode;
    dateEmail?: Date | undefined;
}

export type typeMessage = {
    user: string;
    email:string;
    subject: string;
    dateMessage: string;
    message:string;
}