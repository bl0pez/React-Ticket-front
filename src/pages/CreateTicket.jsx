import React, { useContext, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';

import { SocketContext } from '../context';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const CreateTicket = () => {

    useHideMenu(true);
    const { socket } = useContext(SocketContext);
    const [ticket, setTicket] = useState(null);

    const newTicket = () => {
        //Emitimos un ento para crear un nuevo ticket
                // evento , payload, callback
        socket.emit('new-ticket', null, (ticket) => {
            setTicket(ticket);
        });
    }

    return (
        <>
        
            <Row>
                <Col
                    span={14}
                    offset={6}
                    align="center"
                >
                    <Title
                        level={3}
                    >
                        Presione el botón para crear un nuevo ticket
                    </Title>
                    <Button
                        type="primary"
                        shape="round"
                        icon={<DownloadOutlined />}
                        onClick={newTicket}
                    >
                        Nuevo Ticket
                    </Button>

                </Col>
            </Row>

            <Row
                style={{ marginTop: 100 }}
            >
                <Col
                    span={14}
                    offset={6}
                    align="center"
                >
                    <Text level={ 2 }>
                        Su número:
                    </Text>
                    <br />
                    <Text
                        type="success"
                        style={{ fontSize: 55 }}
                    >
                        { ticket?.number }
                    </Text>
                </Col>
            </Row>
        
        </>
    )
}
