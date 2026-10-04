import React from 'react';
import bannerImg from '../../../../assets/banner-main.png';

const Banner = ({ handleClaimCoins }) => {
  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-800 text-white p-8 md:p-16 text-center shadow-xl flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Assemble Your Ultimate BPL Dream 11
        </h1>
        <p className="text-purple-200 text-base md:text-lg max-w-xl">
          Claim free credit, select your top-tier star players, and craft a winning cricket squad!
        </p>
        <img src={bannerImg} alt='Banner' />
        <button
          onClick={handleClaimCoins}
          className="btn btn-warning btn-lg font-bold rounded-xl shadow-lg hover:scale-105 transition-transform mt-2"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;