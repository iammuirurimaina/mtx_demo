import React from 'react';
import StatCard from './Trends/StatCard';
import ToggleButton from './ToggleButton';
import FilterButton from './FilterButton';

interface ConsumptionStatsProps {
  stats: {
    title: string;
    value: string;
    subtitle: string;
  }[];
}

const ConsumptionStats: React.FC<ConsumptionStatsProps> = ({ stats }) => {
  return (
    <section className="flex flex-col">
      <header className="flex overflow-hidden gap-5 justify-center pr-6 pb-3 pl-3 text-sm font-semibold tracking-tight max-md:pr-5">
        <div className="flex flex-wrap flex-1 shrink gap-3 justify-center items-center basis-0 min-w-[240px] size-full max-md:max-w-full">
          <div className="flex flex-col grow shrink items-start self-stretch my-auto min-w-[240px] w-[773px] max-md:max-w-full">
            <ToggleButton
              options={['Highest Consumptions', 'Lowest Consumptions']}
              activeIndex={0}
            />
          </div>
          <FilterButton label="All Type" />
          <FilterButton label="All Locations" />
        </div>
      </header>
      <main className="flex overflow-hidden flex-wrap gap-5 justify-center items-start pr-6 pl-3 min-h-[105px] text-zinc-800 max-md:pr-5">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </main>
    </section>
  );
};

export default ConsumptionStats;