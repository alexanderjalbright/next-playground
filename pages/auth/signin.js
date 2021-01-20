import React from 'react';
import { providers, signIn } from 'next-auth/client';

export default function CustomSignIn({ providers }) {
    return (
        <>
            {providers &&
                Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
        </>
    );
}

SignIn.getInitialProps = async (context) => {
    if (providers) {
        return {
            providers: await providers(context),
        };
    }
};
