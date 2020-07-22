import React, {useState, useEffect} from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import {useRedirection} from "../../hooks/useRedirection";


export default function Navbar(props) {

    const {ids} = props;
  
    const Redirection = (pageid) => {
      useRedirection(pageid)
    }

    

    return (
        <div style={{ width: 256 }}>
         
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={true}
          >
            <Menu.Item key="1" icon={<AppstoreOutlined />} onClick={() => Redirection(ids[0])}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => Redirection(ids[1])}>
              About
            </Menu.Item>
            <Menu.Item key="3" icon={<MailOutlined />} onClick={() => Redirection(ids[2])}>
              Contact
            </Menu.Item>
            <Menu.Item key="4" icon={<ContainerOutlined />} onClick={() => Redirection(ids[3])}>
              Repo
            </Menu.Item>
          </Menu>
        </div>
      );
}
