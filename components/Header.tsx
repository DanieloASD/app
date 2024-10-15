"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Table Tennis Analytics
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref>
                <Button variant={pathname === '/' ? 'default' : 'ghost'}>Home</Button>
              </Link>
            </li>
            <li>
              <Link href="/matches" passHref>
                <Button variant={pathname === '/matches' ? 'default' : 'ghost'}>Matches</Button>
              </Link>
            </li>
            <li>
              <Link href="/courses" passHref>
                <Button variant={pathname === '/courses' ? 'default' : 'ghost'}>Courses</Button>
              </Link>
            </li>
            <li>
              <Link href="/subscription" passHref>
                <Button variant={pathname === '/subscription' ? 'default' : 'ghost'}>Subscribe</Button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/login" passHref>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;