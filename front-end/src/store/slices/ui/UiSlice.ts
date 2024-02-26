import { createSlice } from "@reduxjs/toolkit";

//* Importing types
import { typeUiSlice } from "../../../types/types";

const initialState: typeUiSlice = {
    //* First boolean is for inbox panel
    //* Second boolean is for sent panel
    //* Third boolean is for message panel
    statePanels: [true, false, false],
    previousPanelStatus: undefined,
    messageModal: false
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
        },
        onSetPreviousPanelStatus: (state, { payload }) => {
            state.previousPanelStatus = payload;
        },
        onOpenMessageModal: (state) => {
            state.messageModal = true;
        },
        onCloseMessageModal: (state) => {
            state.messageModal = false;
        }
    }
});

export const { 
    onOpenInboxPanel,
    onOpenSentPanel,
    onOpenMessagePanel,
    onSetPreviousPanelStatus,
    onOpenMessageModal,
    onCloseMessageModal
 } = uiSlice.actions;