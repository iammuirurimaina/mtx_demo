import React from 'react';

interface ConsumptionStatsProps {
  stats: {
    title: string;
    value: string;
    subtitle: string;
  }[];
}

interface FilterButtonProps {
  label: string;
}

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
}

interface ToggleButtonProps {
  options: string[];
  activeIndex: number;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label }) => {
  return (
    <button className="flex gap-2 items-center px-3 py-1.5 border border-solid border-slate-950 min-h-[32px] rounded-[360px] text-zinc-800 text-sm whitespace-nowrap">
      <span>{label}</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4185621f8dbb81d15ae0dfb8b02f235cf42237108b6aa33b653a00f9ea3256b2?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9"
        className="w-5 h-5 object-contain"
        alt=""
      />
    </button>
  );
};

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle }) => {
  return (
    <section className="flex-1 min-w-[220px] w-full sm:w-1/2 lg:w-1/4 p-2">
      <div className="flex flex-col gap-1 p-4 rounded-2xl bg-stone-200">
        <h3 className="text-sm tracking-tight">{title}</h3>
        <p className="text-2xl font-medium tracking-tighter leading-snug text-emerald-900">{value}</p>
        <p className="text-xs tracking-tight">{subtitle}</p>
      </div>
    </section>
  );
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ options, activeIndex }) => {
  return (
    <div className="flex gap-1 items-start p-2 w-full max-w-[414px] bg-stone-200 rounded-[32px]">
      {options.map((option, index) => (
        <button
          key={index}
          className={`flex-1 px-3 py-1.5 min-h-[32px] rounded-[360px] text-sm ${
            index === activeIndex ? 'bg-emerald-900 text-stone-50' : 'bg-stone-200 text-zinc-800'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const ConsumptionStats: React.FC<ConsumptionStatsProps> = ({ stats }) => {
  return (
    <section className="flex flex-col p-4">
      <header className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-4">
        <ToggleButton options={['Highest Consumptions', 'Lowest Consumptions']} activeIndex={0} />
        <div className="flex flex-wrap gap-2">
          <FilterButton label="All Type" />
          <FilterButton label="All Locations" />
        </div>
      </header>
      <main className="flex flex-wrap -mx-2">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </main>
    </section>
  );
};

export default ConsumptionStats;
