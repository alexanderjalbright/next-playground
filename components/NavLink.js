import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, children, isMobile }) {
    const router = useRouter();

    const defaultClass = 'px-3 py-2 rounded-md font-medium';
    const mobileClass = `${defaultClass} block text-base`;
    const desktopClass = `${defaultClass} text-sm`;

    const inactiveClass = `text-gray-300 hover:bg-gray-700 hover:text-white`;
    const activeClass = `bg-gray-900 text-white`;

    const navLinkClass = (href) => {
        return `${isMobile ? mobileClass : desktopClass} ${
            router.pathname === href ? activeClass : inactiveClass
        }`;
    };

    return (
        <Link href={href}>
            <a className={navLinkClass(href)}>{children}</a>
        </Link>
    );
}
