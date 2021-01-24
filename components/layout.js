import Head from 'next/head';
import NavBar from './navbar';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, providers }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <NavBar providers={providers} />
            </header>
            <main>{children}</main>
        </div>
    );
}
