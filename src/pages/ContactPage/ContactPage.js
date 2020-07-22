import React from 'react';
import { Input, Form, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import "./ContactPage.scss";

export default function ContactPage(props) {
    const {id} = props;

 
    return (
        <div id={id} className="contact-page">
            <div className="contact-page__form">
            <h3>Contact</h3>
            <Form className="contact-page__form__container">
            <Form.Item
                 rules={[{ required: true, message: 'Please input your username!' }]}
                 >
           <Input size="large" placeholder="Name"/>
           </Form.Item>
            <Form.Item
                 rules={[{ required: true, message: 'Please input your username!' }]}
                 >
           <Input size="large" placeholder="Last Name"/>
           </Form.Item>
            <Form.Item
                 rules={[{ required: true, message: 'Please input your username!' }]}
                 >
           <Input size="large" placeholder="Email"/>
           </Form.Item>
            <Form.Item
                 rules={[{ required: true, message: 'Please input your username!' }]}
                 >
           <Input.TextArea size="large" placeholder="Subject" prefix={<UserOutlined />}/>
           </Form.Item>
           <Form.Item>
                 <Button type="primary" htmlType="submit">
                     Submit
                 </Button>
      </Form.Item>
            </Form>
            </div>
        </div>
    )
}
