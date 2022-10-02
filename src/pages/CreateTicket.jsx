import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';

import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const CreateTicket = () => {

    useHideMenu(true);

    const newTicket = () => {

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
                        55
                    </Text>
                </Col>
            </Row>
        
        </>
    )
}
