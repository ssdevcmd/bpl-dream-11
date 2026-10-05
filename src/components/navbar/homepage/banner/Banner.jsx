import React from 'react';
import bannerMain from '../../../../assets/banner-main.png';
import bgShadow from '../../../../assets/bg-shadow.png'; 

const Banner = ({ handleClaimCoins }) => {
  return (
    <div className="container mx-auto px-4 mt-4">
      <div 
        className="rounded-3xl bg-black bg-cover bg-center text-white p-8 md:p-12 text-center shadow-2xl flex flex-col items-center justify-center gap-4 relative overflow-hidden"
        style={{ backgroundImage: `url(${bgShadow})` }}
      >
        <img 
          src={bannerMain} 
          alt="Cricket Equipment Illustration" 
          className="w-48 md:w-64 object-contain mb-2" 
        />
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight max-w-2xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border border-warning p-1 rounded-2xl mt-2">
          <button
            onClick={handleClaimCoins}
            className="btn btn-warning bg-amber-400 hover:bg-amber-500 border-none text-black font-bold px-6 py-2 rounded-xl text-sm md:text-base"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;