// import React, { useState } from 'react';

// // Component imports
// // // import SearchBar from './SearchBar';
// // import AddLocationButton from './AddLocationButton';
// // import LocationTable from './LocationTable';


// // Types
// type LocationData = {
//   location: string;
//   region: string;
//   type: string;
//   device: string;
//   status: 'Online' | 'Offline';
//   action: string;
// };

// const LocationManagement: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [selectedRegion, setSelectedRegion] = useState<string>('All Regions/Towns');
//   const [selectedType, setSelectedType] = useState<string>('All Types');
//   const [selectedStatus, setSelectedStatus] = useState<string>('All Status');
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [itemsPerPage, setItemsPerPage] = useState<number>(10);

//   const locationData: LocationData[] = [
//     { location: 'ABC Place', region: 'Nairobi', type: 'Full', device: 'JH-Abc', status: 'Online', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb56dbace07e38f374eb0b30d8d4fd273f0d534c737fd2647805b399cc0cf5f0?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//     { location: 'Adams', region: 'Nairobi', type: 'Full', device: 'JH-Adams', status: 'Online', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb56dbace07e38f374eb0b30d8d4fd273f0d534c737fd2647805b399cc0cf5f0?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//     { location: 'Aga Khan Dr. Plaza', region: 'Nairobi', type: 'Express', device: 'JH-Agakhan', status: 'Online', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/87161c3c7f1ecfae4c7a805a1ed0213faac17750e2acdf35d5b9c6f86ed34c82?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//     { location: 'Airport View', region: 'Nairobi', type: 'Full', device: 'JH-Airview', status: 'Online', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac646e6822beb94befb53bf13f18d8024b3d1b5f6b0f62bb3228eefed6ad81da?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//     { location: 'Airside', region: 'Nairobi', type: 'Full', device: 'JH-Airside', status: 'Online', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac646e6822beb94befb53bf13f18d8024b3d1b5f6b0f62bb3228eefed6ad81da?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//     { location: 'Capital', region: 'Nairobi', type: 'Full', device: 'JH-capital', status: 'Offline', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac646e6822beb94befb53bf13f18d8024b3d1b5f6b0f62bb3228eefed6ad81da?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//     { location: 'Ciata Mall', region: 'Kiambu', type: 'Full', device: 'JH-Ciatamall', status: 'Online', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/260958431c5d2d8485f5d06642ac46f583da51aafcb29a0f06dad7b2419b3dc5?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//     { location: 'Centre Point', region: 'Diani', type: 'Full', device: 'JH-Centrepoint', status: 'Online', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b577d0689572074efb04e10750dab0280b62dec51ac77e1660b998a1421454b1?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//     { location: 'Mama Ngina Street', region: 'Nairobi', type: 'Full', device: 'JH-Mamangina', status: 'Online', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b577d0689572074efb04e10750dab0280b62dec51ac77e1660b998a1421454b1?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//     { location: 'Embassy House', region: 'Nairobi', type: 'Express', device: 'JH-Mamangina', status: 'Online', action: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b577d0689572074efb04e10750dab0280b62dec51ac77e1660b998a1421454b1?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9' },
//   ];

//   const filteredData = locationData.filter((location) => {
//     return (
//       location.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedRegion === 'All Regions/Towns' || location.region === selectedRegion) &&
//       (selectedType === 'All Types' || location.type === selectedType) &&
//       (selectedStatus === 'All Status' || location.status === selectedStatus)
//     );
//   });

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const handleSearchChange = (value: string) => {
//     setSearchTerm(value);
//     setCurrentPage(1);
//   };

//   const handleRegionChange = (value: string) => {
//     setSelectedRegion(value);
//     setCurrentPage(1);
//   };

//   const handleTypeChange = (value: string) => {
//     setSelectedType(value);
//     setCurrentPage(1);
//   };

//   const handleStatusChange = (value: string) => {
//     setSelectedStatus(value);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleItemsPerPageChange = (value: number) => {
//     setItemsPerPage(value);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="flex flex-col">
//       <header className="flex overflow-hidden gap-5 justify-center pr-12 pl-8 text-sm font-semibold tracking-tight max-md:px-5">
//         <div className="flex flex-wrap flex-1 shrink gap-3 items-center basis-0 min-w-[240px] size-full max-md:max-w-full">
//           <SearchBar value={searchTerm} onChange={handleSearchChange} />
//           <AddLocationButton />
//         </div>
//       </header>
//       <main className="flex overflow-hidden gap-5 justify-center items-start pt-3 pr-6 pb-14 pl-3 min-h-[764px] max-md:pr-5">
//         <section className="flex flex-col flex-1 shrink justify-center p-6 w-full basis-0 bg-stone-200 min-h-[696px] min-w-[240px] rounded-[32px] max-md:px-5 max-md:max-w-full">
//           <div className="flex flex-col flex-1 w-full max-md:max-w-full">
//             <div className="flex flex-wrap gap-3 items-center pb-3 w-full text-sm font-semibold tracking-tight text-zinc-800 max-md:max-w-full">
//               <FilterDropdown label="All Regions/Towns" value={selectedRegion} onChange={handleRegionChange} />
//               <FilterDropdown label="All Types" value={selectedType} onChange={handleTypeChange} />
//               <FilterDropdown label="All Status" value={selectedStatus} onChange={handleStatusChange} />
//             </div>
//             <LocationTable data={currentItems} />
//             <Pagination
//               currentPage={currentPage}
//               itemsPerPage={itemsPerPage}
//               totalItems={filteredData.length}
//               onPageChange={handlePageChange}
//               onItemsPerPageChange={handleItemsPerPageChange}
//             />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default LocationManagement;