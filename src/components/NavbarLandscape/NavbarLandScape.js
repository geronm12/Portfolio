import React, {useState, useEffect}  from 'react';
import { Menu } from 'antd';
import {useMediaQuery} from "react-responsive";

import {
  AppstoreOutlined,
  BulbOutlined,
  DesktopOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';

import {useRedirection} from "../../hooks/useRedirection";


export default function NavbarLandScape(props) {

    const {ids} = props;
  
    const [key, setKey] = useState(['1'])

    const [y, setY] = useState(0);

    console.log("Estamos en mobile!");

    const isBetween450And320 = useMediaQuery({
      query: '(min-width: 450px)' 
    });


    const isBetween550And450 = useMediaQuery({
      query: '(max-width: 550px) and (min-width: 450px)'
    });


    const isBetween700And550 = useMediaQuery({
      query: '(max-width: 700px) and (min-width: 550px)'
    })


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

      if(isBetween450And320){
        
       if(y <= 440){
        setKey(['1']);
      }

      if(y <= 1950 && y > 440){
        setKey(['2'])
      }

      if(y <= 2500 && y > 1950){
        setKey(['3'])
      }

      if(y <= 3100 && y > 2500){
        setKey(['4'])
      }
      
       if(y <= 3200 && y > 3100){
         setKey(['5'])
       }
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
              Quote
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
