import React from 'react';
import { Card, Col, Row } from 'antd';
const DashboardCard = ({ cards }) => (

    <Row gutter={16}>
        {console.log(cards)}
        {cards.map((item, index) => (

            <Col key={index} span={8} >
                <Card title={item.title} bordered={false} className={`${item.color} ${item.bgColor} ${item.hover} cursor-pointer`}>
                    <div className='flex flex-row justify-between items-center'>
                        <div>{item.icon}</div>
                        <div className="text-6xl font-medium">{item.count}</div>
                    </div>
                </Card>
            </Col>
        ))}

    </Row>
);
export default DashboardCard;