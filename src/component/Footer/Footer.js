import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialMedia = {
        facebook: 'https://www.facebook.com/genitsg',
        whatsapp: '6582469048',
        snapchat: '',
        twitter: 'https://www.twitter.com/genitsg',
        youtube: 'https://www.youtube.com/channel/UCVVtf7suCZpdTOTwJulMDKA',
    }
    return (
        <div className={styles.footer}>
            <Container>
                <Row>
                    <Col xs={3}>
                        <h5 className={styles.footer__heading}>About Us</h5>
                        <p className=''>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </Col>
                    <Col xs={3}>
                        <h5 className={styles.footer__heading}>Quick Links</h5>
                        <ul>
                            <li className={styles.links}>
                                <Link className={styles.links__href} to='/'>Home</Link>
                            </li>
                            <li className={styles.links}>
                                <Link className={styles.links__href} to='/login'>Login</Link>
                            </li>
                            <li className={styles.links}>
                                <Link className={styles.links__href} to='/contact'>Contact</Link>
                            </li>
                            <li className={styles.links}>
                                <Link className={styles.links__href} to='/feedback'>Feedback</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <h5 className={styles.footer__heading}>Contact Us</h5>
                        <ul>
                            <li className={styles.links}>
                                <a className={styles.links__href} href="tel:6582469048">+65 8246 9048</a>
                            </li>
                            <li className={styles.links}>
                                <a className={styles.links__href} href="mailto:admin@genit.sg">admin@genit.sg</a>
                            </li>
                            <li className={styles.links}>
                                <a className={styles.links__href}>BLK 55 Chai Chee Drive, SG 460055</a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <h5 className={styles.footer__heading}>Follow Us</h5>
                        <ul className={styles.social}>
                            <li className={styles.links}>
                                <a className={styles.links__href + ' ' + styles.facebook} href={socialMedia.facebook} target="_blank">
                                    <i className='fa fa-facebook' />
                                </a>
                            </li>
                            <li className={styles.links}>
                                <a className={styles.links__href + ' ' + styles.whatsapp} href={`https://api.whatsapp.com/send?phone=${socialMedia.whatsapp}&text=`} target="_blank">
                                    <i className='fa fa-whatsapp' />
                                </a>
                            </li>
                            <li className={styles.links}>
                                <a className={styles.links__href + ' ' + styles.snapchat} href={socialMedia.snapchat} target="_blank">
                                    <i className='fa fa-snapchat' />
                                </a>
                            </li>
                            <li className={styles.links}>
                                <a className={styles.links__href + ' ' + styles.twitter} href={socialMedia.twitter} target="_blank">
                                    <i className='fa fa-twitter' />
                                </a>
                            </li>
                            <li className={styles.links}>
                                <a className={styles.links__href + ' ' + styles.youtube} href={socialMedia.youtube} target="_blank">
                                    <i className='fa fa-youtube' />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className={styles.hr} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Copyright &copy; {currentYear}</p>
                    </Col>
                    <Col className={styles.copyright}>
                        <p>Solution By <a className={styles.links__href} href="https://www.facebook.com/genitsg" target="_blank">Genit</a></p>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Footer