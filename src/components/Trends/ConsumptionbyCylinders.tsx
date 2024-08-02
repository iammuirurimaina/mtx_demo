import React from 'react';

interface ConsumptionData {
  title: string;
  value: number;
  unit: string;
  subValue: string;
}

const consumptionData: ConsumptionData[] = [
  { title: 'Total', value: 200, unit: 'Cylinders', subValue: '9 tons' },
  { title: 'Weekly', value: 4, unit: 'Cylinders', subValue: '180 kg' },
  { title: 'Monthly', value: 16, unit: 'Cylinders', subValue: '720 kg' },
  { title: 'Yearly', value: 192, unit: 'Cylinders', subValue: '8.6 tons' },
];

const FilterButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className="flex gap-2 items-center self-stretch px-3 py-1.5 my-auto border border-solid border-slate-950 min-h-[32px] rounded-[360px]">
      <span className="self-stretch my-auto">{label}</span>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99aa25784cab2a12730b90d5c889313734ca8aae5b7cc6c13239387fc36548c4?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" 
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" 
        alt=""
      />
    </button>
  );
};

const StatCard: React.FC<ConsumptionData> = ({ title, value, unit, subValue }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-h-[87px] min-w-[240px]">
      <div className="flex overflow-hidden gap-3.5 justify-between items-end px-8 py-3 w-full rounded-2xl bg-stone-200 max-md:px-5">
        <div className="flex overflow-hidden flex-col w-[123px]">
          <div className="flex-1 shrink gap-1 self-stretch w-full text-sm tracking-tight whitespace-nowrap text-zinc-800">
            {title}
          </div>
          <div className="mt-1 text-2xl font-medium tracking-tighter leading-snug text-emerald-900">
            {value}{' '}
            <span className="text-xs tracking-tight leading-5">{unit}</span>
          </div>
        </div>
        <div className="text-sm font-bold tracking-tight text-right text-zinc-800 w-[45px]">
          {subValue}
        </div>
      </div>
    </div>
  );
};

const ConsumptionByCylinders: React.FC = () => {
  return (
    <section className="flex flex-col">
      <header className="flex overflow-hidden justify-between pr-6 pb-3 pl-3 text-sm font-semibold tracking-tight text-zinc-800 max-md:pr-5">
        <div className="flex flex-wrap gap-3 justify-between items-center h-full min-w-[240px] w-[1047px] max-md:max-w-full">
          <h1 className="text-xl font-medium tracking-tighter leading-snug max-md:max-w-full">
            Consumption By Cylinders
          </h1>
          <div className="flex gap-3">
            <FilterButton label="All Type" />
            <FilterButton label="All Locations" />
          </div>
        </div>
      </header>
      <div className="flex overflow-hidden flex-wrap gap-5 justify-center items-start pr-6 pl-3 min-h-[105px] max-md:pr-5">
        {consumptionData.map((data, index) => (
          <StatCard key={index} {...data} />
        ))}
      </div>
    </section>
  );
};

export default ConsumptionByCylinders;
