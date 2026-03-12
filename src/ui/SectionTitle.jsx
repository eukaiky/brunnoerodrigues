import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`flex flex-col gap-3 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      {subtitle && (
        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;