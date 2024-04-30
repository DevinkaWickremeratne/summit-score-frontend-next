'use client';
import { Avatar, Badge, Card, Rating } from 'flowbite-react';
import { Calendar, GlobeAlt, LocationMarker } from 'heroicons-react';
import { NextPage } from 'next';
import { getServerSession } from 'next-auth/next';
import { useParams } from 'next/navigation';
import React from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import conferences from '@/data/ConferenceList';
import formatDate from '@/utils/DateFormatter';

const DetailsPage: NextPage = async () => {
    const session = await getServerSession(authOptions)

    const { slug } = useParams<any>();

    const conference = conferences.find((conference) => conference.id === Number(slug));
    return (
        <div>
            {session !== null &&
                <div>
                    <Card className='m-4'>
                        <div className='flex flex-row'>
                            {conference && <h1 className='text-2xl font-bold'>{conference.name}</h1>}
                            <Badge icon={GlobeAlt as any} className='ml-2 mt-1' href={conference?.website} color="indigo" size="sm">Official Website</Badge>

                        </div>
                        <div className='flex flex-row'>
                            <Badge icon={Calendar as any} color='pink' size='sm'>
                                {conference && formatDate(conference.startDate)} - {conference && formatDate(conference.endDate)}
                            </Badge>
                            <Badge icon={LocationMarker as any} color='success' size='sm' className='ml-1'>
                                {conference?.location}
                            </Badge>
                        </div>
                        {/* Rating Section */}
                        <div className='flex flex-row'>
                            <Rating size="md">
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                            </Rating> <p className='text-slate-500 pt-1 ml-2'>4.8/5</p>
                        </div>
                        <div className='flex flex-row'>
                            <h3 className='font-bold text-slate-700'>Speakers: </h3> <p className='text-slate-700'>&nbsp; {conference?.speakers.join(', ')}</p>
                        </div>
                        <p className='italic'>{conference?.description}</p>
                    </Card>
                    <h2 className='mt-3 ml-4 text-xl font-bold text-slate-600'>Reviews</h2>
                    <div className='m-4'>
                        {conference?.reviews.map((review) => (
                            <Card className='mt-2' key={review.id}>
                                <div className='flex flex-row gap-2'>
                                    <Avatar rounded />
                                    <p className='text-slate-700 font-bold mt-2'>{review.user}</p>
                                </div>

                                <div className='flex flex-row'>
                                    <Rating size='sm'>
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star filled={false} />
                                    </Rating>
                                    <p className='text-slate-500 pt-1 ml-2'>{review.rating}/5</p>
                                </div>

                                <p className='text-slate-500'>{review.comment}</p>
                            </Card>
                        ))}
                    </div>
                </div>}
        </div>
    );
};

export default DetailsPage;