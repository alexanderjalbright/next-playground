import Head from 'next/head';
import { siteTitle } from '../components/layout';

export default function Home() {
    return (
        <div>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>Home Page</div>
        </div>
    );
}
