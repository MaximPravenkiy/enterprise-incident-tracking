import {GET_INCIDENTS} from '../actions/actionTypes';

const initialState = {
    initLoading: false,
    loading: false,
    data: [],
    list: [
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Mustafa",
                last: "Korol"
            },
            email: "mustafa.korol@example.com",
            nat: "TR"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Alma",
                last: "Pedersen"
            },
            email: "alma.pedersen@example.com",
            nat: "DK"
        },
        {
            gender: "female",
            name: {
                title: "M",
                first: "BAM BAM",
                last: "Quadro"
            },
            email: "MBQ@example.com",
            nat: "CHACk"
        },
    ],
}

function incidentsReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_INCIDENTS:
            return {

            }
        default:
            return state;
    }
}

export default incidentsReducer;