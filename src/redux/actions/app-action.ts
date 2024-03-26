import { createAction } from "@reduxjs/toolkit";

export const setOpenSearchModal = createAction<boolean>("SET_OPEN_SEARCH_MODAL");

export const setOpenReactMomentModal = createAction<boolean>("SET_OPEN_REACT_MOMENT_MODAL");
export const setOpenThankYouModal = createAction<boolean>("SET_OPEN_THANK_YOU_MODAL");

export const setOpenSubscribeModal = createAction<boolean>("SET_OPEN_SUBSCRIBE_MODAL");

export const setOpenBitsPopup = createAction<boolean>("SET_OPEN_BITS_POPUP");
export const setOpenTurboPopover = createAction<boolean>("SET_OPEN_TURBO_POPOVER");
export const setOpenWhispersPopup = createAction<boolean>("SET_OPEN_WHISPERS_POPUP");
export const setOpenNotificationPopup = createAction<boolean>("SET_OPEN_NOTIFICATION_POPUP");

export const setOpenShareModal = createAction<boolean>("SET_OPEN_SHARE_MODAL");
