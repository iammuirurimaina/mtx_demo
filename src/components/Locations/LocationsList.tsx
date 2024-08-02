import React, { useState } from 'react';

interface FilterButtonProps {
  label: string;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 items-center self-stretch px-3 py-1.5 my-auto border border-solid border-slate-950 min-h-[32px] rounded-[360px]"
    >
      <span className="self-stretch my-auto">{label}</span>
      <img
        loading="lazy"
        src="http://b.io/ext_10-" // Replace with a valid URL
        alt={`Filter: ${label}`} // Improved accessibility
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
    </button>
  );
};

interface LocationData {
  location: string;
  regionTown: string;
  type: string;
  device: string;
  status: 'Online' | 'Offline';
  actionImage: string;
}

const locationData: LocationData[] = [
  // Add valid URLs for actionImage
  {
    location: 'ABC Place',
    regionTown: 'Nairobi',
    type: 'Full',
    device: 'JH-Abc',
    status: 'Online',
    actionImage: 'https://example.com/image1.png', // Replace with a valid URL
  },
  // Additional location data...
];

interface LocationTableHeaderProps {
  headers: string[];
}

const LocationTableHeader: React.FC<LocationTableHeaderProps> = ({ headers }) => {
  return (
    <header className="flex relative flex-col w-full text-base font-semibold tracking-tight text-zinc-800 max-md:max-w-full">
      <div className="flex z-0 flex-wrap gap-4 items-center px-6 py-2 w-full min-h-[40px] max-md:px-5 max-md:max-w-full">
        {headers.map((header, index) => (
          <div key={index} className="overflow-hidden flex-1 shrink self-stretch my-auto whitespace-nowrap">
            {header}
          </div>
        ))}
      </div>
      <div className="flex absolute inset-0 z-0 max-w-full rounded-2xl bg-stone-50 min-h-[40px] w-[1007px]" />
    </header>
  );
};

interface LocationTableRowProps {
  location: LocationData;
}

const LocationTableRow: React.FC<LocationTableRowProps> = ({ location }) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center px-6 py-1.5 w-full text-base font-semibold tracking-tight min-h-[50px] text-zinc-800 max-md:px-5 max-md:max-w-full">
        <div className="overflow-hidden flex-1 shrink self-stretch my-auto">{location.location}</div>
        <div className="overflow-hidden flex-1 shrink self-stretch my-auto">{location.regionTown}</div>
        <div className="overflow-hidden flex-1 shrink self-stretch my-auto whitespace-nowrap">{location.type}</div>
        <div className="overflow-hidden flex-1 shrink self-stretch my-auto whitespace-nowrap">{location.device}</div>
        <div className="flex overflow-hidden flex-col flex-1 shrink items-start self-stretch my-auto text-xs tracking-tight text-center whitespace-nowrap basis-0 text-zinc-800">
          <div className={`overflow-hidden self-stretch px-2 py-1 rounded-[100px] ${location.status === 'Online' ? 'bg-cyan-300' : 'bg-red-400'}`}>
            {location.status}
          </div>
        </div>
        <img
          loading="lazy"
          src={location.actionImage}
          alt={`${location.location} action`} // Improved accessibility
          className="object-contain flex-1 shrink self-stretch my-auto aspect-[3.65] basis-0 w-[146px]"
        />
      </div>
      <div className="flex flex-col justify-center px-4 w-full max-md:max-w-full">
        <div className="w-full border border-solid border-stone-50 min-h-[1px] max-md:max-w-full" />
      </div>
    </div>
  );
};

interface PaginationProps {
  itemsPerPage: number;
  onItemsPerPageChange: (value: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  onItemsPerPageChange,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <nav className="flex flex-wrap gap-3 items-center pt-3 w-full max-md:max-w-full">
      <div className="flex gap-3 justify-center items-center self-stretch px-4 py-2 my-auto text-sm font-semibold tracking-tight border border-solid border-slate-950 min-h-[40px] rounded-[360px] text-zinc-800">
        <div className="self-stretch my-auto">{itemsPerPage} Per Page</div>
        <img
          loading="lazy"
          src="http://b.io/ext_11-" // Replace with a valid URL
          alt="Toggle items per page" // Improved accessibility
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          onClick={() => onItemsPerPageChange(itemsPerPage === 10 ? 20 : 10)}
        />
      </div>
      <div className="flex gap-3 justify-center items-center self-stretch px-4 py-2 my-auto border border-solid border-slate-950 min-h-[40px] rounded-[360px]">
        <img
          loading="lazy"
          src="http://b.io/ext_12-" // Replace with a valid URL
          alt="Previous page"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          onClick={onPreviousPage}
        />
        <img
          loading="lazy"
          src="http://b.io/ext_13-" // Replace with a valid URL
          alt="Next page"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          onClick={onNextPage}
        />
      </div>
    </nav>
  );
};

const LocationList: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterClick = (filter: string) => {
    console.log(`Filter clicked: ${filter}`);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(locationData.length / itemsPerPage)));
  };

  const paginatedData = locationData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col flex-1 shrink justify-center p-6 w-full basis-0 bg-stone-200 min-h-[696px] min-w-[240px] rounded-[32px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
        <section className="flex flex-wrap gap-3 items-center pb-3 w-full text-sm font-semibold tracking-tight text-zinc-800 max-md:max-w-full">
          <FilterButton label="All Regions/Towns" onClick={() => handleFilterClick("Regions/Towns")} />
          <FilterButton label="All Types" onClick={() => handleFilterClick("Types")} />
          <FilterButton label="All Status" onClick={() => handleFilterClick("Status")} />
        </section>
        <section className="flex flex-col w-full max-md:max-w-full">
          <LocationTableHeader headers={["Location", "Region/Town", "Type", "Device", "Status", "Action"]} />
          {paginatedData.map((location, index) => (
            <LocationTableRow key={index} location={location} />
          ))}
        </section>
        <Pagination
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
        />
      </div>
    </div>
  );
};

export default LocationList;
