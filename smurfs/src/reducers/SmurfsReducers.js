import {
    FETCH_SMURFS_DATA_START,
    FETCH_SMURFS_DATA_SUCCESS,
    FETCH_SMURFS_DATA_ADD

} from '../actions';

const initialState = {
    smurfs: []
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SMURFS_DATA_START:
            return {
                ...state,
            };
        case FETCH_SMURFS_DATA_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,

            };
        case FETCH_SMURFS_DATA_ADD:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]

            };
        default:
            return state;
    }
};