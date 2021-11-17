import * as types from './types';

export const sendVerificationCodeAction = (payload: {
    message: string;
    status: boolean;
}): types.SignUpPageActionTypes => ({
    type: types.ACTION_TYPE.SEND_VERIFICATION_CODE,
    payload: {
        message: payload.message,
        status: payload.status,
    },
});

export const sendVerificationCodeActionSaga = ()