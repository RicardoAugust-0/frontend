import React from 'react';

function MetricCard({ icon, title, value, variant = 'default', className = '' }) {
  return (
    <div className={`flex flex-row items-center justify-between py-4 px-4 gap-2 ${className}`}>
      <div className="flex flex-col items-start justify-center">
        <span className="font-bold flex items-center gap-2 text-base sm:text-lg">
          {icon}
          {title}
        </span>
        <span className="text-2xl sm:text-4xl font-bold mt-1">{value}</span>
      </div>
    </div>
  );
}

export default MetricCard;
