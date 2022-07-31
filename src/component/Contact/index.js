import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from "react-helmet";
import Title from '../../utils/Title'
import Hero from '../../utils/Hero';
import Layout from '../../Layout'
import styles from './contact.module.css';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact us | Gentsoot</title>
            </Helmet>
            <Hero content='Contact Us' pathname='contact' />
            <Layout>
                <Container>
                    <Row>
                        <Col>
                            <Title content='Contact us' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.995709196945!2d103.9105802356529!3d1.3265983365236282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d54b051b8e9%3A0xba390e886f3556e!2sSingapore%20460055!5e0!3m2!1sen!2ssg!4v1659260983185!5m2!1sen!2ssg" loading="lazy" />
                        </Col>
                        <Col className='my-auto' xs={6}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export default Contact