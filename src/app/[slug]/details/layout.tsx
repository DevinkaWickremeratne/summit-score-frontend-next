'use client';
import { Button, Navbar, NavbarToggle } from 'flowbite-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 ">
          
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="#">
          {/* <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Summit Score Logo" /> */}
          <span className="text-xl font-semibold dark:text-white">Summit Score</span>
        </Navbar.Brand>
        <NavbarToggle />
        <Navbar.Collapse>
        <Navbar.Link href="/" className='mt-2'>Conferences</Navbar.Link>
            <Button className="mr-2">Write a Review</Button>
          <Navbar.Link href="#" className='mt-2'>Login/Signup</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
            <main>
                {children}
            </main>   
        </div>
    );
};

export default Layout;