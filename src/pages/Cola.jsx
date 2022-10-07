import { useContext, useState, useEffect } from 'react';
import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import { SocketContext } from '../context';
import { useHideMenu } from '../hooks/useHideMenu';
import { getLastTicket } from '../helpers/getLastTicket';

const { Title, Text } = Typography;

export const Cola = () => {

    useHideMenu(true);
    const { socket } = useContext(SocketContext);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        socket.on('last-ticket', (tickets) => {
            setTickets(tickets);
        });

        return () => {
            socket.off('last-ticket');
        }

    }, [socket]);
    
    useEffect(() => {
      getLastTicket()
        .then(setTickets);
    }, [])
    

    return (
        <>
            <Title level={1}>Atendiendo al cliente</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={tickets.slice(0, 3)}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    style={{ width: 300, marginTop: 16 }}
                                    actions={[
                                        <Tag color="volcano">{item.agent}</Tag>,
                                        <Tag color="magenta">Escritorio: {item.desk}</Tag>
                                    ]}
                                >
                                    <Title>No. {item.number}</Title>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <Divider>Historial</Divider>
                    <List
                        dataSource={tickets.slice(3)}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`Ticket No. ${item.number}`}
                                    description={
                                        <>
                                            <Text type="secondary">En el escritorio: </Text>
                                            <Tag color="magenta">{item.desk}</Tag>
                                            <Text type="secondary">Agente: </Text>
                                            <Tag color="volcano">{item.agent}</Tag>
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                        />
                </Col>
            </Row>

        </>
    )
}
