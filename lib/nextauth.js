import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from './prisma';

export const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    site: process.env.NEXTAUTH_URL,
    secret: process.env.NEXT_AUTH_SECRET,
    adapter: Adapters.Prisma.Adapter({ prisma }),
    // // Callbacks are asynchronous functions you can use to control what happens
    // // when an action is performed.
    // // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        // signIn: async (user, account, profile) => {
        //     // console.log('signin', {
        //     //     user,
        //     //     account,
        //     //     profile,
        //     // });
        //     return Promise.resolve(true);
        // },
        // redirect: async (url, baseUrl) => {
        //     return Promise.resolve(url);
        // },
        // jwt: async (token, user, account, profile, isNewUser) => {
        //     // The user argument is only passed the first time this callback is called on a new session, after the user signs in
        //     if (user) {
        //         // Add a new prop on token for user data
        //         token.data = user;
        //     }
        //     // Don't access user as it's only available once, access token.data instead
        //     // if (token.data?.accessToken) {
        //     //     const decodedJwt = atob(token.data.accessToken);
        //     //     const almostNow = moment().add(5, 'minutes').valueOf() / 1000;
        //     //     if (
        //     //         decodedJwt.exp !== undefined &&
        //     //         decodedJwt.exp < almostNow
        //     //     ) {
        //     //         // Token almost expired, refresh
        //     //         try {
        //     //             const newToken = await refreshToken(
        //     //                 token.data.refreshToken
        //     //             );
        //     //             token.data.accessToken = newToken;
        //     //         } catch (error) {
        //     //             console.error(error, 'Error refreshing access token');
        //     //         }
        //     //     }
        //     // }
        //     return Promise.resolve(token);
        // },
        // session: async (session, user) => {
        //     // `user` is the jwt token
        //     if (user.data) {
        //         // Assign access token to session
        //         session.accessToken = user.data.accessToken;
        //         return Promise.resolve(session);
        //     }
        // },
    },
    // pages: {
    //     signIn: '/api/auth/signin', // Displays signin buttons
    //     signOut: '/api/auth/signout', // Displays form with sign out button
    //     // error: '/api/auth/error', // Error code passed in query string as ?error=
    //     // verifyRequest: '/api/auth/verify-request', // Used for check email page
    //     // newUser: null // If set, new users will be directed here on first sign in
    // },
    // // Events are useful for logging
    // // https://next-auth.js.org/configuration/events
    // events: {},

    // // Enable debug messages in the console if you are having problems
    debug: false,
    // session: {
    //     jwt: true,
    //     // Seconds - How long until an idle session expires and is no longer valid.
    //     maxAge: 30 * 24 * 60 * 60,
    // },
};
