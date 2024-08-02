import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
}
const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle }) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-h-[87px] min-w-[240px]">
      <div className="flex overflow-hidden gap-3 items-center py-3 pr-7 pl-8 w-full rounded-2xl bg-stone-200 max-md:px-5">
        <div className="flex overflow-hidden flex-col self-stretch my-auto w-[174px]">
          <h3 className="flex-1 shrink gap-1 self-stretch w-full text-sm tracking-tight">
            {title}
          </h3>
          <p className="mt-1 text-2xl font-medium tracking-tighter leading-snug text-emerald-900">
            {value}
          </p>
          <p className="flex-1 shrink gap-1 self-stretch mt-1 w-full text-xs tracking-tight">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-1 shrink gap-3 self-stretch my-auto w-px h-10 basis-0 rounded-[40px]" />
      </div>
    </article>
  );
};

export default StatCard;