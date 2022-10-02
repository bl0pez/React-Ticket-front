import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import { Slider } from '../Components/Slider';

const { Content } = Layout;

export const Main = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Slider />
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
