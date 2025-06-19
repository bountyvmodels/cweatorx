'use client';

import Image from 'next/image';

type Props = {
  id: number;
  title: string;
  subtitle: string;
  members: string;
  price: string;
  image: string;
  index: number;
};

export default function CommunityCard({
  title,
  subtitle,
  members,
  price,
  image,
  index,
}: Props) {
  return (
    <div
      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-500 opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="h-48 w-full rounded-md object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
      <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
        <span>{members} members</span>
        <span className="font-medium text-green-600">{price}</span>
      </div>
    </div>
  );
}
