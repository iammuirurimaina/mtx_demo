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
    <button className="flex gap-2 items-center px-3 py-1.5 my-auto border border-solid border-slate-950 rounded-[360px] bg-stone-200 hover:bg-emerald-900 hover:text-stone-50 transition-colors duration-300">
      <span>{label}</span>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99aa25784cab2a12730b90d5c889313734ca8aae5b7cc6c13239387fc36548c4?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" 
        className="object-contain w-5 aspect-square" 
        alt=""
      />
    </button>
  );
};

const StatCard: React.FC<ConsumptionData> = ({ title, value, unit, subValue }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-h-[87px] min-w-[200px]">
      <div className="flex flex-col justify-between items-start p-4 w-full rounded-3xl bg-stone-200 leading-[150%] text-zinc-800">
        <div className="text-sm tracking-tight">{title}</div>
        <div className="mt-1 text-2xl font-medium tracking-tighter leading-snug text-emerald-900">
          {value} <span className="text-xs tracking-tight">{unit}</span>
        </div>
        <div className="text-sm font-bold tracking-tight text-right text-zinc-800 w-full">
          {subValue}
        </div>
      </div>
    </div>
  );
};

const ConsumptionByCylinders: React.FC = () => {
  return (
    <section className="flex flex-col">
      <header className="flex justify-between items-center p-3 text-sm font-semibold tracking-tight text-zinc-800">
        <h1 className="text-xl font-medium tracking-tighter leading-snug">
          Consumption By Cylinders
        </h1>
        <div className="flex gap-3">
          <FilterButton label="All Type" />
          <FilterButton label="All Locations" />
        </div>
      </header>
      <div className="flex flex-wrap gap-5 justify-center items-start p-3">
        {consumptionData.map((data, index) => (
          <StatCard key={index} {...data} />
        ))}
      </div>
    </section>
  );
};

export default ConsumptionByCylinders;
