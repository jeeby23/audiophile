'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ActiveLink({
  href,
  children,
  className = '',
  activeClassName = 'text-[#D87D4A] font-bold',
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : 'text-gray-600'}`}
    >
      {children}
    </Link>
  );
}