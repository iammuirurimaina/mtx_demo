import React from 'react';

interface ConsumptionChartProps {
  title: string;
  subtitle: string;
}

interface TimeBarProps {
  time: string;
  height: number;
}

interface FilterButtonProps {
  text: string;
}

const TimeBar: React.FC<TimeBarProps> = ({ time, height }) => {
  return (
    <div className="flex flex-col items-center max-md:hidden">
      <div className="flex w-8 bg-emerald-900 rounded-[48px]" style={{ height: `${height}px` }} />
      <div className="mt-2.5">{time}</div>
    </div>
  );
};

const FilterButton: React.FC<FilterButtonProps> = ({ text }) => {
  return (
    <button className="flex gap-2 items-center self-stretch px-3 py-1.5 my-auto text-sm font-semibold tracking-tight border border-solid border-slate-950 min-h-[32px] rounded-[360px]">
      <span className="self-stretch my-auto">{text}</span>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99aa25784cab2a12730b90d5c889313734ca8aae5b7cc6c13239387fc36548c4?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" 
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" 
        alt="" 
      />
    </button>
  );
};

const ConsumptionChart: React.FC<ConsumptionChartProps> = ({ title, subtitle }) => {
  const timeData = [
    { time: '12 AM', height: 1 },
    { time: '1 AM', height: 1 },
    { time: '2 AM', height: 1 },
    { time: '3 AM', height: 1 },
    { time: '4 AM', height: 1 },
    { time: '5 AM', height: 1 },
    { time: '6 AM', height: 50 },
    { time: '7 AM', height: 90 },
    { time: '8 AM', height: 120 },
    { time: '9 AM', height: 150 },
    { time: '10 AM', height: 170 },
    { time: '11 AM', height: 180 },
    { time: '12 PM', height: 190 },
    { time: '1 PM', height: 220 },
    { time: '2 PM', height: 220 },
    { time: '3 PM', height: 190 },
    { time: '4 PM', height: 150 },
    { time: '5 PM', height: 130 },
    { time: '6 PM', height: 90 },
    { time: '7 PM', height: 40 },
    { time: '8 PM', height: 10 },
    { time: '9 PM', height: 1 },
    { time: '10 PM', height: 1 },
    { time: '11 PM', height: 1 },
  ];

  return (
    <section className="flex overflow-hidden gap-5 justify-center items-start py-6 pr-6 pl-3 min-h-[511px] max-md:pr-5">
      <div className="flex flex-col flex-1 shrink justify-center p-8 w-full basis-0 bg-stone-200 min-h-[463px] min-w-[240px] rounded-[32px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 w-full max-md:max-w-full">
          <header className="flex flex-wrap gap-3 items-center w-full text-zinc-800 max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-6 min-w-[240px] max-md:max-w-full">
              <h2 className="text-2xl font-medium tracking-tighter leading-snug">{title}</h2>
              <p className="text-base tracking-tight">
                {/* <span className="font-bold text-emerald-900">1 PM & 2 PM:</span> {subtitle} */}
              </p>
            </div>
            <FilterButton text="All Type" />
            <FilterButton text="All Locations" />
            <FilterButton text="All Days" />
          </header>
          <div className="flex flex-col items-center mt-6 w-full text-xs font-medium tracking-normal text-center min-h-[318px] text-neutral-600 max-md:max-w-full">
            <div className="flex items-start gap-3 w-full">
              <span className="text-base font-bold text-emerald-900">1 PM & 2 PM:</span>
            </div>
            <div className="flex flex-wrap flex-1 gap-5 justify-center max-w-full h-full w-[989px] items-end mt-2">
              {timeData.map((item, index) => (
                <TimeBar key={index} time={item.time} height={item.height} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsumptionChart;
