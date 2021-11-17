import * as types from './types';
import * as actions from './actions';
import { fork, put, select, takeEvery } from 'redux-saga/effects';
import { RootState } from '../rootReducer';

function* handleSendVerificationCode(action: types.SendVerificationCodeAction) {
    const email = yield select((state: RootState) => state.signUpPageReducer.email);

    yield put(
        actions.sendVerificationCodeAction({
            message: action.payload.message,
            status: action.payload.status,
        }),
    );
}

function* watchSendVerificationCode() {
    yield takeEvery(types.ACTION_TYPE.SEND_VERIFICATION_CODE_SAGA, handleSendVerificationCode);
}

const sagas = [fork(watchSendVerificationCode)];
export default sagas;
