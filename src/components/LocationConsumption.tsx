import React from 'react';

interface ConsumptionCardProps {
  title: string;
  value: string;
  location: string;
  imageSrc: string;
}

const ConsumptionCard: React.FC<ConsumptionCardProps> = ({ title, value, location, imageSrc }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-6 pt-6 pb-2 mx-auto w-full rounded-3xl bg-stone-200 leading-[150%] text-zinc-800 max-md:px-5 max-md:mt-6">
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col my-auto">
            <div className="text-base font-semibold tracking-tight">{title}</div>
            <div className="text-2xl font-medium tracking-tighter leading-8 text-emerald-900">{value}</div>
            <div className="text-xs tracking-tight">{location}</div>
          </div>
          <img loading="lazy" src={imageSrc} alt={`${title} consumption chart`} className="shrink-0 max-w-full aspect-[0.96] w-[120px]" />
        </div>
      </div>
    </div>
  );
};

const LocationConsumption: React.FC = () => {
  const consumptionData = [
    { title: "Highest", value: "325 kg", location: "Upperhill", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/681452557a893edf223e8a7b2977c50269160146c8cafab9c482385be8e091e1?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" },
    { title: "Second Highest", value: "283 kg", location: "Shell Waiyaki", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/65addada37708e9dbd0d75d6cf5da0e99c9a8bd91544825c0e27392db11fb059?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" },
    { title: "Lowest", value: "85 kg", location: "Orbit Place", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7076d0f2184a416bcf83a7c84a2d1a0e4592ff36d16953129223584f7d99e9df?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" },
  ];

  return (
    <section className="flex flex-col justify-center px-3 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between px-3 pb-1.5 text-zinc-800 max-md:flex-wrap max-md:max-w-full">
        <h2 className="self-start text-xl font-medium tracking-tighter leading-7">Location Based Consumption By</h2>
        <div className="flex flex-col items-end px-16 pb-2 text-sm font-semibold tracking-tight leading-5 whitespace-nowrap rounded-[32px] max-md:max-w-full">
          <div className="flex gap-1 px-2 pt-0.5 pb-2 bg-stone-200 rounded-[32px]">
            {['Yearly', 'Monthly', 'Weekly'].map((period, index) => (
              <button key={index} className={`flex-1 px-3 py-1 rounded-[360px] ${index === 2 ? 'bg-emerald-900 text-stone-50' : 'bg-stone-200'} max-md:px-5`}>
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-3xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {consumptionData.map((data, index) => (
            <ConsumptionCard key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationConsumption;