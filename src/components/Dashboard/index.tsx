import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

const Dashboard = ({ form: { getFieldDecorator } }: FormComponentProps): React.FunctionComponentElement<{}> => {
    return (
        <div>
            <h1>Welcome, Leo!</h1>
            <Form className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(<Input prefix="Search for an item or type a new key" placeholder="Username" />)}
                </Form.Item>
            </Form>
        </div>
    );
};

export default Form.create({ name: 'dashboard' })(Dashboard);
