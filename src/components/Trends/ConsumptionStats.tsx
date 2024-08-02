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
    <button className="flex gap-2 items-center self-stretch px-3 py-1.5 my-auto border border-solid border-slate-950 min-h-[32px] rounded-[360px] text-zinc-800">
      <span className="self-stretch my-auto">{label}</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4185621f8dbb81d15ae0dfb8b02f235cf42237108b6aa33b653a00f9ea3256b2?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9"
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        alt=""
      />
    </button>
  );
};

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle }) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-h-[87px] min-w-[240px]">
      <div className="flex overflow-hidden gap-3 items-center py-3 pr-7 pl-8 w-full rounded-2xl bg-stone-200 max-md:px-5">
        <div className="flex overflow-hidden flex-col self-stretch my-auto w-[174px]">
          <h3 className="flex-1 shrink gap-1 self-stretch w-full text-sm tracking-tight">{title}</h3>
          <p className="mt-1 text-2xl font-medium tracking-tighter leading-snug text-emerald-900">{value}</p>
          <p className="flex-1 shrink gap-1 self-stretch mt-1 w-full text-xs tracking-tight">{subtitle}</p>
        </div>
        <div className="flex flex-1 shrink gap-3 self-stretch my-auto w-px h-10 basis-0 rounded-[40px]" />
      </div>
    </article>
  );
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ options, activeIndex }) => {
  return (
    <div className="flex gap-1 items-start p-2 max-w-full bg-stone-200 rounded-[32px] w-[414px]">
      {options.map((option, index) => (
        <button
          key={index}
          className={`flex-1 shrink gap-2 self-stretch px-3 py-1.5 min-h-[32px] rounded-[360px] ${
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
    <section className="flex flex-col">
      <header className="flex overflow-hidden gap-5 justify-center pr-6 pb-3 pl-3 text-sm font-semibold tracking-tight max-md:pr-5">
        <div className="flex flex-wrap flex-1 shrink gap-3 justify-center items-center basis-0 min-w-[240px] size-full max-md:max-w-full">
          <div className="flex flex-col grow shrink items-start self-stretch my-auto min-w-[240px] w-[773px] max-md:max-w-full">
            <ToggleButton options={['Highest Consumptions', 'Lowest Consumptions']} activeIndex={0} />
          </div>
          <FilterButton label="All Type" />
          <FilterButton label="All Locations" />
        </div>
      </header>
      <main className="flex gap-5 justify-between items-start pr-6 pl-3 min-h-[105px] text-zinc-800 max-md:pr-5">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </main>
    </section>
  );
};

export default ConsumptionStats;
