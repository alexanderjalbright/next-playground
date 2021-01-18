import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    // pages: {
    //     signIn: '/api/auth/signin', // Displays signin buttons
    //     signOut: '/api/auth/signout', // Displays form with sign out button
    //     // error: '/api/auth/error', // Error code passed in query string as ?error=
    //     // verifyRequest: '/api/auth/verify-request', // Used for check email page
    //     // newUser: null // If set, new users will be directed here on first sign in
    // },

    // // Callbacks are asynchronous functions you can use to control what happens
    // // when an action is performed.
    // // https://next-auth.js.org/configuration/callbacks
    // callbacks: {
    //     // signIn: async (user, account, profile) => { return Promise.resolve(true) },
    //     // redirect: async (url, baseUrl) => {
    //     //     return Promise.resolve('http://localhost:3000/auth/loggedin');
    //     // },
    //     // session: async (session, user) => { return Promise.resolve(session) },
    //     // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) }
    // },

    // // Events are useful for logging
    // // https://next-auth.js.org/configuration/events
    // events: {},

    // // Enable debug messages in the console if you are having problems
    // debug: true,
};
export default (req, res) => 
{console.log(req, res, options)
    NextAuth(req, res, options)};
