import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu, Layout } from 'antd';

import { UiContext } from '../context/UiContext';

const { Sider } = Layout;

export const Slider = () => {

    const { hiddenMenu } = useContext(UiContext);

    const navigate = useNavigate();
    const [key, setKey] = useState('1');

    //cambiar navegacion
    const handleClick = (key) => {
        switch (key) {
            case '1':
                navigate('/ingresar');
                break;
            case '2':
                navigate('/cola');
                break;
            case '3':
                navigate('/crear');
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        handleClick(key);
    }, [key])

    return (
        <Sider
            collapsedWidth="0"
            breakpoint="md"
            hidden={hiddenMenu}
        >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                selectedKeys={[key]}
                onClick={(e) => setKey(e.key)}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Ingresar',
                        path: '/create-ticket',

                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'Cola',
                        path: '/cola',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'Crear Ticket',
                        path: '/ingresar',
                    },
                ]}
            />
        </Sider>
    )
}
