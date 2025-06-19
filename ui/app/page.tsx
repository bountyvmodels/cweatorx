'use client';

import { useState } from 'react';
import CategoryFilter from './components/CategoryFilter';
import CommunityCard from './components/CommunityCard';
import LoginBox from './components/LoginBox';

const categories = ['All', 'Hobbies', 'Music', 'Money', 'Spirituality', 'Tech', 'Health', 'Sports', 'Self-Improvement'];

const communities = [
  {
    id: 1,
    title: 'Brotherhood Of Scent',
    subtitle: '#1 Fragrance Community',
    members: '7.2k',
    price: 'Free',
    image: '/scent.jpg',
  },
  {
    id: 2,
    title: 'Abbew Crew',
    subtitle: 'Health, Body & Energy',
    members: '11.3k',
    price: '',
    image: '/abbew.jpg',
  },
  {
    id: 3,
    title: 'Calligraphy Skool',
    subtitle: 'Learn Modern Calligraphy',
    members: '1.3k',
    price: '/month',
    image: '/calligraphy.jpg',
  },
];

export default function Home() {
  const [selected, setSelected] = useState('All');

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:flex md:gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-pink-400 text-6xl font-light tracking-widest">CWEATORS</h1>
        <h2 className="text-pink-300 text-3xl mt-4">Create. Discover. Earn.</h2>
        <div className="mt-8">
          <CategoryFilter selected={selected} setSelected={setSelected} categories={categories} />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((c, i) => (
            <CommunityCard key={c.id} index={i + 1} {...c} />
          ))}
        </div>
      </div>
      <div className="mt-12 md:mt-0 w-full md:max-w-xs">
        <LoginBox />
      </div>
    </div>
  );
}
