import { signIn, signOut, useSession } from 'next-auth/client';

export default function SignIn() {
    const [session, loading] = useSession();

    return (
        <>
            {loading && <div>loading</div>}
            {!session && !loading && (
                <>
                    Not signed in <br />
                    <button onClick={signIn}>Sign in</button>
                </>
            )}
            {session && !loading && (
                <>
                    Signed in as {session.user.email} <br />
                    <button onClick={signOut}>Sign out</button>
                </>
            )}
        </>
    );
}
