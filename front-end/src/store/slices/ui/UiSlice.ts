import { createSlice } from "@reduxjs/toolkit";

//* Importing types
import { typeUiSlice } from "../../../types/types";

const initialState: typeUiSlice = {
    //* First boolean is for inbox panel
    //* Second boolean is for sent panel
    //* Third boolean is for message panel
    statePanels: [true, false, false]
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onOpenInboxPanel: (state) => {
            state.statePanels[0] = true;
            state.statePanels[1] = false;
            state.statePanels[2] = false;
        },
        onOpenSentPanel: (state) => {
            state.statePanels[0] = false;
            state.statePanels[1] = true;
            state.statePanels[2] = false;
        },
        onOpenMessagePanel: (state) => {
            state.statePanels[0] = false;
            state.statePanels[1] = false;
            state.statePanels[2] = true;
        }
    }
});

export const { 
    onOpenInboxPanel,
    onOpenSentPanel,
    onOpenMessagePanel
 } = uiSlice.actions;