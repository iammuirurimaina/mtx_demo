import React from 'react';

interface LocationData {
  name: string;
  region: string;
  type: string;
  device: string;
  status: 'Online' | 'Offline';
}

const locationData: LocationData[] = [
  { name: 'ABC Place', region: 'Nairobi', type: 'Full', device: 'JH-Abc', status: 'Online' },
  { name: 'Adams', region: 'Nairobi', type: 'Full', device: 'JH-Adams', status: 'Online' },
  { name: 'Aga Khan Dr. Plaza', region: 'Nairobi', type: 'Express', device: 'JH-Agakhan', status: 'Online' },
  { name: 'Airport View', region: 'Nairobi', type: 'Full', device: 'JH-Airview', status: 'Online' },
  { name: 'Airside', region: 'Nairobi', type: 'Full', device: 'JH-Airside', status: 'Online' },
  { name: 'Capital', region: 'Nairobi', type: 'Full', device: 'JH-capital', status: 'Offline' },
  { name: 'Ciata Mall', region: 'Kiambu', type: 'Full', device: 'JH-Ciatamall', status: 'Online' },
  { name: 'Centre Point', region: 'Diani', type: 'Full', device: 'JH-Centrepoint', status: 'Online' },
  { name: 'Mama Ngina Street', region: 'Nairobi', type: 'Full', device: 'JH-Mamangina', status: 'Online' },
  { name: 'Embassy House', region: 'Nairobi', type: 'Express', device: 'JH-Mamangina', status: 'Online' },
];

const LocationTable: React.FC = () => {
  const renderLocationRow = (location: LocationData) => (
    <tr key={location.name} className="border-b border-gray-200">
      <td className="py-2 px-4 text-black">{location.name}</td>
      <td className="py-2 px-4 text-black">{location.region}</td>
      <td className="py-2 px-4 text-black">{location.type}</td>
      <td className="py-2 px-4">{location.device}</td>
      <td className="py-2 px-4">
        <span className={`px-2 py-1 rounded-full text-xs text-white ${location.status === 'Online' ? 'bg-cyan-400' : 'bg-red-400'}`}>
          {location.status}
        </span>
      </td>
      <td className="py-2 px-4">
        <div className="flex space-x-2">
          <button className="text-gray-600 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-gray-100 p-6 rounded-3xl">
      <div className="mb-4 flex justify-end space-x-2">
        <select className="border border-gray-300 rounded-full px-3 py-1 text-sm bg-white">
          <option>All Regions/Towns</option>
        </select>
        <select className="border border-gray-300 rounded-full px-3 py-1 text-sm bg-white">
          <option>All Types</option>
        </select>
        <select className="border border-gray-300 rounded-full px-3 py-1 text-sm bg-white">
          <option>All Status</option>
        </select>
      </div>
      <div className="bg-white rounded-xl overflow-hidden shadow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">Location</th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">Region/Town</th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">Type</th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">Device</th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">Status</th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {locationData.map(renderLocationRow)}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <select className="border border-gray-300 rounded-full px-3 py-1 text-sm bg-white">
          <option>10 Per Page</option>
        </select>
        <div className="flex space-x-2">
          <button className="border border-gray-300 rounded-full p-1 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="border border-gray-300 rounded-full p-1 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationTable;