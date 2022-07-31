import React from 'react';
import Layout from '../../Layout';
import Hero from '../../utils/Hero';

import styles from './notFound.module.css';

const NotFound = () => {
    return (
        <>
            <Hero content='404 Not Found' />
            <Layout>
                <div className='text-center'>
                    <h1 className={styles.notfound__heading}>404</h1>
                    <h1 className={styles.notfound__second__heading}>NOT FOUND</h1>
                    <p>Sorry the page you're looking for is either moved or removed.</p>
                </div>
            </Layout>
        </>
    )
}

export default NotFound;