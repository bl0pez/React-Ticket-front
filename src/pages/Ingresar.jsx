import { useState } from 'react';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';

import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';

export const Ingresar = () => {

    const navigate = useNavigate();
    const [ user ] = useState( getUserStorage());

    useHideMenu(false);
    const onFinish = ({agent, desk}) => {
        localStorage.setItem('agent', agent);
        localStorage.setItem('desk', desk);
        navigate('/escritorio', { replace: true });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if( user.agent && user.desk ) {
        return <Navigate to="/escritorio" />;
    }


    return (
        <>
            <Typography.Title level={2}>Ingresar</Typography.Title>
            <Typography.Text>Ingrese su nombre y numero de ticket</Typography.Text>
            <Divider />
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Nombre del agente"
                    name="agent"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su nombre',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Escritorio"
                    name="desk"
                    rules={[
                        {
                            required: true,
                            message: 'Ingrese el número de escritorio',
                        },
                    ]}
                >
                    <InputNumber min={1} max={99} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 14,
                    }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        shape="round"
                    >
                        <SaveOutlined />
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
