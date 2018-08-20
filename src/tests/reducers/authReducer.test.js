import authReducer from '../../reducers/authReducer';

test('Should setup uid for login', () => {
    const uid = '123456ab';
    const action = {
        type: 'LOGIN',
        uid
    };

    const state = authReducer({}, action);

    expect(state.uid).toBe(action.uid);
});

test('Should setup clear uid for logout', () => {
    const authState = { uid: '123456' };
    const action = {
        type: 'LOGOUT',
    };

    const state = authReducer(authState, action);

    expect(state).toEqual({ });
});