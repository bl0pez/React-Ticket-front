import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Typography } from 'antd'

import { getUserStorage } from '../helpers/getUserStorage';
import { useHideMenu } from '../hooks/useHideMenu'

export const Desk = () => {

    useHideMenu(false);
    const [ user ] = useState( getUserStorage());
    const navigate = useNavigate();

    const salir = () => {
        localStorage.removeItem('escritorio');
        localStorage.removeItem('agente');
        navigate('/ingresar', { replace: true });
    }

    const nextTicket = () => {
        
    }

    if( !user.agente || !user.escritorio ) {
        return <Navigate to="/ingresar" />;
    }

    return (
        <>
            <Row>
                <Col
                    span={20}
                >
                    <Typography.Title level={2}>
                        { user.agente }
                    </Typography.Title>
                    <Typography.Text>
                        Usted esta trabajando en el escritorio: </Typography.Text>
                    <Typography.Text type="success">
                        { user.escritorio }
                    </Typography.Text>
                </Col>
                <Col
                    span={4}
                    align="right"
                >
                    <Button
                        shape="round"
                        type="danger"
                        onClick={salir}
                    >
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>

            <Divider />

            <Row>
                <Col>
                    <Typography.Text>Esta atendiendo al cliente: </Typography.Text>
                    <Typography.Text
                        style={{ fontSize: 30 }}
                        type="danger"
                    >
                        5
                    </Typography.Text>
                </Col>
            </Row>

            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        type="primary"
                        shape="round"
                        onClick={nextTicket}
                    >
                        <RightOutlined />
                        Siguiente
                    </Button>
                </Col>
            </Row>

        </>
    )
}
