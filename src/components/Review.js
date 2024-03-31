import React from 'react'
import './review.css'
import { Button, Col, Row } from 'antd';
import { Flex, Progress } from 'antd';
import { Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';


const App = () => (
    <div>
    <div>
        <Row className='row1'>
            <Col className='col1-1' span={8}>
                <Row>
                    <Col className='c1'><h1>3.6 / 5</h1></Col>
                </Row>
                <Row>
                    <Col><Rate className='mainStar' disabled allowHalf defaultValue={3.5} /></Col>
                </Row>
                <Row>
                    <Col><h1>14 Reviews</h1></Col>
                </Row>
            </Col>
            <Col className='col1-2' span={8}>
                <Flex gap={'small'} vertical>
                    <Progress percent={60} status="active" strokeColor={'#ffd53d'} trailColor='rgb(187, 187, 187)'/>
                    <Progress percent={40} status="active" strokeColor={'#ffd53d'} trailColor='rgb(187, 187, 187)'/>
                    <Progress percent={55} status="active" strokeColor={'#ffd53d'} trailColor='rgb(187, 187, 187)'/>
                    <Progress percent={20} status="active" strokeColor={'#ffd53d'} trailColor='rgb(187, 187, 187)'/>
                    <Progress percent={15} status="active" strokeColor={'#ffd53d'} trailColor='rgb(187, 187, 187)'/>
                </Flex>
            </Col>
            <Col className='col1-3' span={8}>
                <Row>
                    <Col><h1>Write a review here</h1></Col>
                </Row>
                <Row>
                    <Col><Button>Review</Button></Col>
                </Row>
            </Col>
        </Row>
    </div>
    <div className='divdiv'>
        <Row className='row2'>
            <Col className='col1-1' span={6}>
                <div className='div1'>
                    <Row>
                        <Col>
                            <Space wrap size={16}>
                                <Avatar className='avatar' size={64} icon={<UserOutlined />} />
                            </Space>
                        </Col>
                        <Col>
                            <Row>
                                <h3>Marshall Gunnell</h3>
                            </Row>
                            <Row>
                                <Rate className='rate' disabled allowHalf defaultValue={4} />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <p className='para'>I had an amazing experience with this company! The customer service was top-notch, and the product exceeded my expectations. I highly recommend them to anyone looking.......view</p>
                    </Row>
                </div>
            </Col>
            <Col className='col2-2' span={6}>
                <div className='div2'>
                    <Row>
                        <Col>
                            <Space wrap size={16}>
                                <Avatar className='avatar' size={64} icon={<UserOutlined />} />
                            </Space>
                        </Col>
                        <Col>
                            <Row>
                                <h3>Marshall Gunnell</h3>
                            </Row>
                            <Row>
                                <Rate className='rate' disabled allowHalf defaultValue={3} />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <p className='para'>I had an amazing experience with this company! The customer service was top-notch, and the product exceeded my expectations. I highly recommend them to anyone looking.......view</p>
                    </Row>
                </div>
            </Col>
            <Col className='col3-3' span={6}>
                <div className='div3'>
                    <Row>
                        <Col>
                            <Space wrap size={16}>
                                <Avatar className='avatar' size={64} icon={<UserOutlined />} />
                            </Space>
                        </Col>
                        <Col>
                            <Row>
                                <h3>Marshall Gunnell</h3>
                            </Row>
                            <Row>
                                <Rate className='rate' disabled allowHalf defaultValue={4} />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <p className='para'>I had an amazing experience with this company! The customer service was top-notch, and the product exceeded my expectations. I highly recommend them to anyone looking.......view</p>
                    </Row>
                </div>
            </Col>
            <Col className='col4-4' span={6}>
                <div className='div4'>
                    <Row>
                        <Col>
                            <Space wrap size={16}>
                                <Avatar className='avatar' size={64} icon={<UserOutlined />} />
                            </Space>
                        </Col>
                        <Col>
                            <Row>
                                <h3>Marshall Gunnell</h3>
                            </Row>
                            <Row>
                                <Rate className='rate' disabled allowHalf defaultValue={4} />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <p className='para'>I had an amazing experience with this company! The customer service was top-notch, and the product exceeded my expectations. I highly recommend them to anyone looking.......view</p>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>
    </div>
)

export default App;