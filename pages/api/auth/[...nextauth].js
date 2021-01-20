import NextAuth from 'next-auth';
import { options } from '../../../lib/nextauth';

export default (req, res) => {
    NextAuth(req, res, options);
};
