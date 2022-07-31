import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './FormWrapper.module.css';

const FormWrapper = (props) => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col>
                    <div className={styles.form__wrapper}>
                        {props.children}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FormWrapper