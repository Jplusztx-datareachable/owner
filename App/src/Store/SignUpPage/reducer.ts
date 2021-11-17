import * as types from './types';

const initialState: types.SignUpReducer = {
    sendVerificationCodeRequest: {
        data: {}, //null
        message: '', // display send the verification code request error message
        isLoading: false, // null
        status: false, //  the status to check whether the code send successful
    },
    authVerificationCodeRequest: {
        data: {}, // null
        message: '', // display auth the verification code request error message
        isLoading: false, // null
        status: false, // the status to check whether the code send successful
    },
    verificationCode: '',
    email: '',
    flag: '', // code type
    uuid: '',
};

export default (state = initialState, action: types.SignUpPageActionTypes): types.SignUpReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.AUTH_VERIFICATION_CODE:
            return {
                ...state,
                sendVerificationCodeRequest: {
                    ...state.sendVerificationCodeRequest,
                    message: action.payload.message,
                    status: action.payload.status,
                },
            };
        default:
            return state;
    }
};
