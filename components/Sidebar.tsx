'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-slate-800 bg-slate-900 pt-24 text-white max-sm:hidden lg:w-[264px]">
      <nav className="flex flex-1 flex-col gap-5 px-2 lg:px-4">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              key={link.route}
              href={link.route}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-3 transition-colors',
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:bg-slate-700/50 hover:text-white'
              )}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <span className="hidden text-base font-medium lg:block">
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
