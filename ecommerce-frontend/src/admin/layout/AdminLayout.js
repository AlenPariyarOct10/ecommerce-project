import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AdminFooter from '../components/AdminFooter';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

const items = [
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        {
          key: 'g1',
          label: 'Item 1',
          type: 'group',
          children: [
            {
              key: '1',
              label: 'Option 1',
            },
            {
              key: '2',
              label: 'Option 2',
            },
          ],
        },
        {
          key: 'g2',
          label: 'Item 2',
          type: 'group',
          children: [
            {
              key: '3',
              label: 'Option 3',
            },
            {
              key: '4',
              label: 'Option 4',
            },
          ],
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '5',
          label: 'Option 5',
        },
        {
          key: '6',
          label: 'Option 6',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '7',
              label: 'Option 7',
            },
            {
              key: '8',
              label: 'Option 8',
            },
          ],
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'Navigation Three',
      icon: <SettingOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
      ],
    },
    {
      key: 'grp',
      label: 'Group',
      type: 'group',
      children: [
        {
          key: '13',
          label: 'Option 13',
        },
        {
          key: '14',
          label: 'Option 14',
        },
      ],
    },
  ];

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
const AdminLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Navbar/>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <div style={{
                        margin: '24px 0',
                    }}></div>
             
                <div className='flex flex-row'>
                    <Sidebar/>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </div>
               

            </Content>
            <AdminFooter/>
        </Layout>
    );
};
export default AdminLayout;