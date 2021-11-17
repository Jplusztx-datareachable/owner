interface AjaxResponseStateType {
    data: Record<string, unknown>;
    message: string;
    isLoading: boolean;
    status: boolean;
}
/**
 * Reducer 类型接口
 */
export interface SignUpReducer {
    sendVerificationCodeRequest: AjaxResponseStateType;
    authVerificationCodeRequest: AjaxResponseStateType;
    verificationCode: string;
    email: string;
    flag: string;
    uuid: string;
}

/**
 * 需要用到的type
 */
export enum ACTION_TYPE {
    // 以下为异步需要使用的ACTION_TYPE
    SEND_VERIFICATION_CODE = 'SEND_VERIFICATION_CODE',
    SEND_VERIFICATION_CODE_SAGA = 'SEND_VERIFICATION_CODE_SAGA',
    AUTH_VERIFICATION_CODE = 'AUTH_VERIFICATION_CODE',
    AUTH_VERIFICATION_CODE_SAGA = 'AUTH_VERIFICATION_CODE_SAGA',
}

/**
 * 需要使用的action types
 */
interface SendVerificationCodeAction {
    type: typeof ACTION_TYPE.SEND_VERIFICATION_CODE;
    payload: {
        message: string;
        status: boolean;
    };
}

interface AuthVerificationCodeAction {
    type: typeof ACTION_TYPE.AUTH_VERIFICATION_CODE;
    payload: {
        message: string;
        status: boolean;
    };
}

export type SignUpPageActionTypes = SendVerificationCodeAction | AuthVerificationCodeAction;

export type { SendVerificationCodeAction, AuthVerificationCodeAction };
