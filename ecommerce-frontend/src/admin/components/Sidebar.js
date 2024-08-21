import React from 'react';
import { AppstoreAddOutlined, AppstoreOutlined, FireOutlined, HomeOutlined, MailOutlined, SettingOutlined, ShoppingOutlined } from '@ant-design/icons';

import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'; 

const items = [
  {
    key: '100',
    label: 'Home',
    href: "admin",
    icon: <HomeOutlined />,
  },
  {
    key: 'categories',
    label: 'Categories',
    icon: <AppstoreAddOutlined />,
    children: [
      {
        key: '2',
        label: 'List',
        href: "admin/categories"
      },
      {
        key: '3',
        label: 'Create',
        href: "admin/categories/create"
      },
    ],
  },
  {
    key: '200',
    label: 'Products',
    icon: <ShoppingOutlined />,
    children: [
      {
        key: '5',
        label: 'List',
        href : "admin/products"
      },
      {
        key: '6',
        label: 'Add',
         href : "admin/products/create"
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: '300',
    label: 'Hot Products',
    icon: <FireOutlined />,
    children: [
      {
        key: '9',
        label: 'List',
      },
      {
        key: '10',
        label: 'Add',
      },
    ],
  },
];
const Sidebar = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    const href = e.item.props.href;
    if (href) {
      navigate(`/${href}`); 
    }
    console.log('Navigating to: ', href);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
        height: 600
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Sidebar;