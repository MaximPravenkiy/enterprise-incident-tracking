const initialState = {
    login: 'qwe',
    password: 'fs',
    dateOfBirth: '',
    position: ''
}

function registrationReducer(state = initialState, action: any): object {
    switch (action.type) {
        case '':
            return {

            }
        default:
            return state;
    }
}

export default registrationReducer;