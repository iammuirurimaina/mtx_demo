import React from 'react';
import FilterButton from './FilterButton';
import MonthBar from './MonthBar';

interface TotalConsumptionProps {
  monthData: {
    month: string;
    height: number;
  }[];
}

const TotalConsumption: React.FC<TotalConsumptionProps> = ({ monthData }) => {
  return (
    <section className="flex flex-col p-8 bg-stone-200 rounded-[32px] max-md:px-5">
      <header className="flex gap-3 justify-between w-full text-zinc-800 max-md:flex-wrap max-md:max-w-full">
        <h2 className="text-2xl font-medium tracking-tighter leading-8">
          Total Consumption
        </h2>
        <nav className="flex gap-3 self-start text-sm font-semibold tracking-tight leading-5">
          <FilterButton text="All Types" />
          <FilterButton text="All Locations" />
          <FilterButton text="This Year" />
        </nav>
      </header>
      <div className="flex gap-5 justify-center px-px mt-6 text-xs font-medium tracking-normal leading-4 text-center whitespace-nowrap text-neutral-600 max-md:flex-wrap max-md:max-w-full">
        {monthData.map((data, index) => (
          <MonthBar key={index} month={data.month} height={data.height} />
        ))}
      </div>
    </section>
  );
};

export default TotalConsumption;