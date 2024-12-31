import Link from 'next/link';
import { FaYoutube, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const footerLinks = [
    { name: '소개', href: '/about' },
    { name: '약관', href: '/terms' },
    { name: '개인정보처리방침', href: '/privacy' },
    { name: '문의하기', href: '/contact' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-4">
          {footerLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-6 h-6" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
