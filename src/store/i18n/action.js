import { createAction } from 'redux-actions';


export const i18n_UPDATE_STATE = createAction('i18n_UPDATE_STATE');

export const i18n_SET_LOCALE = (locale) => (dispatch) => {
    dispatch(i18n_UPDATE_STATE({
        locale: locale,
    }));
};
