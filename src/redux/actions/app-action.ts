import { createAction } from "@reduxjs/toolkit";

export const setOpenReactMomentModal = createAction<boolean>("SET_OPEN_REACT_MOMENT_MODAL");
export const setOpenThankYouModal = createAction<boolean>("SET_OPEN_THANK_YOU_MODAL");

export const setOpenSubscribeModal = createAction<boolean>("SET_OPEN_SUBSCRIBE_MODAL");
export const setOpenBitsPopup = createAction<boolean>("SET_OPEN_BITS_POPUP");

export const setOpenTurboPopover = createAction<boolean>("SET_OPEN_TURBO_POPOVER");
