import React from 'react';

import store from '@ag/store';
import {
    global_SHOW_MODAL,
    global_HIDE_MODAL
} from '@ag/store/global/action';


export const GlobalService = {
    showModal: (component) => {
        return store.dispatch(global_SHOW_MODAL(component));
    },
    hideModal: () => {
        return store.dispatch(global_HIDE_MODAL());
    },
};


export default GlobalService;
