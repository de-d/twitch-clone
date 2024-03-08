import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setOpenReactMomentModal, setOpenThankYouModal, setOpenSubscribeModal } from "../actions/app-action";

const initialAppState = {
  openReactMomentModal: false,
  openThankYouModal: false,
  openSubscribeModal: false,
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
});

export { appReducer };
