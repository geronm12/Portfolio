import React, {useState, useEffect}  from 'react';
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
  
    const [key, setKey] = useState(['1'])

    const [y, setY] = useState(0);

    const Redirection = (pageid, selectedKey) => {
      setKey([selectedKey]);
      useRedirection(pageid);
    }

     
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])
 
     const handleScroll = () => {
       setY(window.scrollY);
     }

     useEffect(() => {

       console.log(y);

       if(y <= 700){
         setKey(['1']);
       }

       if(y <= 1715 && y > 700){
         setKey(['2'])
       }

       if(y <= 2500 && y > 1715){
         setKey(['3'])
       }

       if(y <= 2515 && y > 2500){
         setKey(['4'])
       }
       
        if(y <= 2620 && y > 2515){
          setKey(['5'])
        }

     }, [y])

    return (
        <div style={{ width: 256 }}>
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={true}
            selectedKeys={key}
           >
            <Menu.Item key="1" icon={<AppstoreOutlined />} onClick={() => Redirection(ids[0], '1')}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => Redirection(ids[1], '2')}>
              About
            </Menu.Item>
          

            <Menu.Item key="3" icon={<BulbOutlined />} onClick={() => Redirection(ids[2], '3')}>
              Knowledge
            </Menu.Item>
            <Menu.Item key="4" icon={<MailOutlined />} onClick={() => Redirection(ids[3], '4')}>
              Contact
            </Menu.Item>
            <Menu.Item key="5" icon={<LinkedinOutlined />} onClick={() => Redirection(ids[4], '5')}>
              Social Media
            </Menu.Item>
            
          </Menu>
        </div>
      );
}
