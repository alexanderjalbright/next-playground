import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import axios from 'axios';
import utilStyles from '../styles/utils.module.css';
import { useEffect, useState } from 'react';

export default function Home({ user }) {
    const [name, setName] = useState('Jordon');

    // useEffect(() => {
    //     const getName = async () => {
    //         const response = await axios.post('/api/test', {
    //             Name: 'Fred',
    //             Age: '23',
    //         });
    //         // const response = await axios.get('/api/test')

    //         setName(response.data);
    //     };
    //     getName();
    // }, []);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
                <div>{name}</div>
            </section>
        </Layout>
    );
}
