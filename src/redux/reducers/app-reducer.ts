import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setOpenReactMomentModal, setOpenThankYouModal, setOpenSubscribeModal, setOpenBitsPopup, setOpenTurboPopover } from "../actions/app-action";

const initialAppState = {
  openReactMomentModal: false,
  openThankYouModal: false,
  openSubscribeModal: false,
  openBitsPopup: false,
  openTurboPopover: false,
};

const appReducer = createReducer(initialAppState, (builder) => {
  builder.addCase(setOpenReactMomentModal, (state, action: PayloadAction<boolean>) => {
    state.openReactMomentModal = action.payload;
  });
  builder.addCase(setOpenThankYouModal, (state, action: PayloadAction<boolean>) => {
    state.openThankYouModal = action.payload;
  });
  builder.addCase(setOpenSubscribeModal, (state, action: PayloadAction<boolean>) => {
    state.openSubscribeModal = action.payload;
  });
  builder.addCase(setOpenBitsPopup, (state, action: PayloadAction<boolean>) => {
    state.openBitsPopup = action.payload;
  });
  builder.addCase(setOpenTurboPopover, (state, action: PayloadAction<boolean>) => {
    state.openTurboPopover = action.payload;
  });
});

export { appReducer };
