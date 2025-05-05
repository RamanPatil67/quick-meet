'use client';

import Image from 'next/image';


interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
    className={`group relative overflow-hidden rounded-xl bg-slate-800 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 cursor-pointer ${className}`}
      onClick={handleClick}
    >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
