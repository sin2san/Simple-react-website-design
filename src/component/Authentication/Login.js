import React, { useContext } from 'react'
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"
import { Form } from 'react-bootstrap'
import FormWrapper from '../../utils/FormWrapper'
import CustomButton from '../../utils/CustomButton'
import Layout from '../../Layout'
import Hero from '../../utils/Hero'

import { AuthContext } from '../../Contexts/AuthContext'
import { AlertContext } from '../../Contexts/AlertContext'

const Login = () => {
    const navigate = useNavigate();
    const {
        setIsActive,
        setVariant,
        setMessage
    } = useContext(AlertContext);

    const {
        email,
        setEmail,
        defaultEmail,
        password,
        setPassword,
        defaultPassword
    } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailAddress = localStorage.getItem('email');

        if (!emailAddress) {
            if (email === defaultEmail && password === defaultPassword) {
                localStorage.setItem('email', email);
                const username = email.split("@")[0];
                setIsActive(true);
                setVariant('success');
                setMessage('Hi ' + username + ', You are successfully logged in !');
                navigate('/');
            } else {
                setIsActive(true);
                setVariant('danger');
                setMessage('Email or password is wrong !');
            }
        }
    }
    return (
        <>
            <Helmet>
                <title>Login | Gentsoot</title>
            </Helmet>
            <Hero content='Login' pathname='Login' />
            <Layout>
                <FormWrapper>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='sinthusan@genit.sg'
                                id='email'
                                name='email'
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                            />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='P@ssw0rd!@#$'
                                id='password'
                                name='password'
                                onChange={event => setPassword(event.target.value)}
                                value={password}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' label='Remember me' />
                        </Form.Group>
                        <CustomButton name='Submit' />
                    </Form>
                    <br />
                    <span><strong>Demo email:</strong> sinthusan@genit.sg</span>
                    <br />
                    <span><strong>Demo password:</strong> P@ssw0rd!@#$</span>
                </FormWrapper>
            </Layout>
        </>
    )
}

export default Login