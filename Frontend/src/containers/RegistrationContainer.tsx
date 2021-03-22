import React from 'react';
import {RegistrationForm} from "../components/Forms/RegistrationForm";
import {Form} from "antd";
import {useDispatch} from "react-redux";
import {postRegistration} from "../redux/store/actions/registrationCreator";

export interface RegistrationProps {
    form: any,
    registerNewUser: any
}

const RegistrationContainer = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const registerNewUser = async (values: any) => {
        console.log('Received values of form: ', values);
        dispatch(postRegistration(values));
    };

    return (
        <RegistrationForm
            form={form}
            registerNewUser={registerNewUser}
        />
    );
}

export default RegistrationContainer;