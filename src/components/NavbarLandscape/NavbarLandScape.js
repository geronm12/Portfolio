import React  from 'react';
import { Menu } from 'antd';
 
import {
  AppstoreOutlined,
  BulbOutlined,
  DesktopOutlined,
  LinkedinOutlined,
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
            <Menu.Item key="3" icon={<BulbOutlined />} onClick={() => Redirection(ids[2])}>
              Quote
            </Menu.Item>
            <Menu.Item key="4" icon={<MailOutlined />} onClick={() => Redirection(ids[3])}>
              Contact
            </Menu.Item>
            <Menu.Item key="5" icon={<LinkedinOutlined />} onClick={() => Redirection(ids[4])}>
              Social Media
            </Menu.Item>
          </Menu>
        </div>
      );
}
