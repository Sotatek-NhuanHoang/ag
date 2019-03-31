import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import I18n from '@ag/i18n';


const defaultState = {
    locale: I18n.defaultLocale,
};


export const reducer = handleActions({
    i18n_UPDATE_STATE: (state, { payload }) => {
        return fromJS(state)
            .mergeDeep(payload)
            .toJS();
    },
}, defaultState);


export default reducer;
