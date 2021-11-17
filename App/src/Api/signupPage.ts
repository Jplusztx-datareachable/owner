import axios, { AxiosResponse } from 'axios';

export interface APIResponse {
    data: {
        code: number;
        message: string;
        data?: Record<string, unknown>;
    };
}

export const sendCodeByMobileOrEmail = (data: {
    sessionCode: string;
    mobile?: {
        country: string;
        number: string;
    };
    email?: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/register/code/request',
        data,
    });
};

export const verifyCode = (data: { sessionCode: string; code: string }): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/register/code/verify',
        data,
    });
};
