import { Provider, providers } from 'next-auth/client';
import Layout from '../components/layout';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Layout providers={pageProps.providers}>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

App.getInitialProps = async (context) => {
    if (providers) {
        const providerList = await providers(context);
        return {
            pageProps: { providers: providerList },
        };
    }
};
