import React from 'react';

const ApiStatus = ({ connected, message }) => {
  const statusClasses = connected 
    ? 'bg-green-100' 
    : 'bg-gray-200';
  
  const dotClasses = connected 
    ? 'bg-green-500' 
    : 'bg-red-500 animate-pulse';

  return (
    <div className="mb-6">
      <div className={`inline-flex items-center px-4 py-2 rounded-full ${statusClasses}`}>
        <span className={`w-3 h-3 rounded-full mr-2 ${dotClasses}`}></span>
        <span className="font-medium">
          Backend: {connected ? 'Connected' : 'Not Connected'}
        </span>
        <span className="ml-3 text-sm text-gray-600">{message}</span>
      </div>
    </div>
  );
};

export default ApiStatus;