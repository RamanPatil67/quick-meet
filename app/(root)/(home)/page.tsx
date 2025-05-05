import React from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';
import { Calendar, Clock } from 'lucide-react';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="relative h-[320px] w-full overflow-hidden rounded-[20px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}>
        </div>
        
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-3 animate-fadeIn">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-sky-200" />
              <p className="text-lg font-medium text-sky-200 lg:text-2xl">{date}</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-7 w-7 text-white lg:h-9 lg:w-9" />
              <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            </div>
            <p className="mt-1 max-w-md text-sky-100 lg:text-lg">Schedule your next meeting with ease. Select a meeting type below to get started.</p>
          </div>
          
          <div className="flex items-center justify-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <div className="h-8 w-8 rounded-full bg-green-400"></div>
            </div>
            <div className="text-sm font-medium text-white lg:text-base">You&apos;re available for meetings</div>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;