import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import Title from '../../utils/Title';
import CardWrapper from '../../utils/CardWrapper';
import Hero from '../../utils/Hero';
import Layout from '../../Layout';

import CardPlaceHolder from './card_placeholder.svg';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home Page | Gentsoot</title>
            </Helmet>
            <Hero content="Gensoot is a one place social media management platform" />
            <Layout>
                <Container>
                    <Row>
                        <Col>
                            <Title content="Welcome to Gensoot" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <CardWrapper
                                image={CardPlaceHolder}
                                title='Lorem ipsum'
                                content='Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown.'
                                buttonLink=''
                                buttonText='Read more'
                            />
                        </Col>
                        <Col>
                            <CardWrapper
                                image={CardPlaceHolder}
                                title='Lorem ipsum'
                                content='Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown.'
                                buttonLink=''
                                buttonText='Read more'
                            />
                        </Col>
                        <Col>
                            <CardWrapper
                                image={CardPlaceHolder}
                                title='Lorem ipsum'
                                content='Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown.'
                                buttonLink=''
                                buttonText='Read more'
                            />
                        </Col>
                        <Col>
                            <CardWrapper
                                image={CardPlaceHolder}
                                title='Lorem ipsum'
                                content='Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown.'
                                buttonLink=''
                                buttonText='Read more'
                            />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </Layout>
        </>
    )
}

export default Home;