import { useState } from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function SignIn({ providers }) {
    const [session, loading] = useSession();
    const [userMenu, setUserMenu] = useState(false);
    const toggleUserMenu = () => setUserMenu(!userMenu);
    return (
        <>
            {loading && <div>loading</div>}
            {!session && !loading && (
                <>
                    {/* <!-- Profile dropdown --> */}
                    <div className="ml-3 relative">
                        <div>
                            <button
                                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                id="user-menu"
                                aria-haspopup="true"
                                onClick={toggleUserMenu}
                            >
                                Sign in
                            </button>
                        </div>
                        {userMenu && (
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                {providers &&
                                    Object.values(providers).map((provider) => (
                                        <button
                                            key={provider.name}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                            onClick={() => signIn(provider.id)}
                                        >
                                            with {provider.name}
                                        </button>
                                    ))}
                            </div>
                        )}
                    </div>
                </>
            )}
            {session && !loading && (
                <>
                    {/* <!-- Profile dropdown --> */}
                    <div className="ml-3 relative">
                        <div>
                            <button
                                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                id="user-menu"
                                aria-haspopup="true"
                                onClick={toggleUserMenu}
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={session.user.image}
                                    alt="profile pic"
                                />
                            </button>
                        </div>
                        {userMenu && (
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                {/* <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Your Profile
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Settings
                                </a> */}
                                <button
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                    onClick={signOut}
                                >
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
