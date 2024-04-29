"use client";
import { Badge, Card, Navbar, NavbarToggle, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import formatDate from '@/utils/DateFormatter';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { fetchAllConferences } from './services/ConferenceService';

export default function Home() {
  const router = useRouter();
  const  [conferences,setConferences] = useState<any[]>([]);

  useEffect( () => {
   fetchAllConferences().then((response) => { setConferences(response)});
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 ">
      <Navbar fluid rounded className="">
        <Navbar.Brand as={Link} href="#">
          <img src="/logo.png" className="h-20" alt="Summit Score Logo" />
          <span className="text-xl font-semibold dark:text-white">Summit Score</span>
        </Navbar.Brand>
        <NavbarToggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Login/Signup</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="flex flex-col">
        <div className="my-4">
          <TextInput
            icon={MagnifyingGlassIcon as any}
            id='search'
            placeholder='Search'
            required
            type='text'
            color='primary'
            className='w-1/4 mr-3 float-right'
          />
        </div>

        <div className="flex flex-row flex-wrap justify-around gap-x-4 gap-y-8 w-full">
          {conferences.map((conference, index) => (
            <Card href="#" className="w-64 min-h-48" key={conference.id} onClick={() => router.push(`${conference.id}/details`)}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {conference.name}
              </h5>
              <Badge color="indigo" className="mt-2" size="sm">{formatDate(conference.startDate)} - {formatDate(conference.endDate)}</Badge>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {conference.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
