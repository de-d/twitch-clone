import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  setOpenSearchModal,
  setOpenReactMomentModal,
  setOpenThankYouModal,
  setOpenSubscribeModal,
  setOpenBitsPopup,
  setOpenTurboPopover,
  setOpenWhispersPopup,
  setOpenNotificationPopup,
  setOpenShareModal,
} from "../actions/app-action";

const initialAppState = {
  openSearchModal: false,
  openReactMomentModal: false,
  openThankYouModal: false,
  openSubscribeModal: false,
  openBitsPopup: false,
  openTurboPopover: false,
  openWhispersPopup: false,
  openNotificationPopup: false,
  openShareModal: false,
};

const appReducer = createReducer(initialAppState, (builder) => {
  builder.addCase(setOpenSearchModal, (state, action: PayloadAction<boolean>) => {
    state.openSearchModal = action.payload;
  });
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
    if (action.payload) {
      state.openTurboPopover = false;
      state.openWhispersPopup = false;
      state.openNotificationPopup = false;
    }
  });
  builder.addCase(setOpenTurboPopover, (state, action: PayloadAction<boolean>) => {
    state.openTurboPopover = action.payload;
    if (action.payload) {
      state.openBitsPopup = false;
      state.openWhispersPopup = false;
      state.openNotificationPopup = false;
    }
  });
  builder.addCase(setOpenWhispersPopup, (state, action: PayloadAction<boolean>) => {
    state.openWhispersPopup = action.payload;
    if (action.payload) {
      state.openBitsPopup = false;
      state.openTurboPopover = false;
      state.openNotificationPopup = false;
    }
  });
  builder.addCase(setOpenNotificationPopup, (state, action: PayloadAction<boolean>) => {
    state.openNotificationPopup = action.payload;
    if (action.payload) {
      state.openBitsPopup = false;
      state.openTurboPopover = false;
      state.openWhispersPopup = false;
    }
  });
  builder.addCase(setOpenShareModal, (state, action: PayloadAction<boolean>) => {
    state.openShareModal = action.payload;
  });
});

export { appReducer };
