import { login, logout } from '../../actions/auth';

test('Should setup login action object correctly', () => {
    const uid = 'ab12567';
    const action = login(uid);

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Should setup logout action object correctly', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT',
    });
});