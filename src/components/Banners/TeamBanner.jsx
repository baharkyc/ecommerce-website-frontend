import React from 'react';
import Breadcrumb from '../menus/Breadcrumb';

const TeamBanner = () => {
  return (
    <div className="flex flex-col justify-around py-12 text-center overflow-hidden">
      <div className="w-full mb-4">
        <h1 className="text-3xl font-bold text-text-color">what we do</h1>
        <p className="text-lg text-second-text-color mt-4">
          Pushing boundaries, creating the future.
        </p>
      </div>

      <Breadcrumb itemAlignment="justify-center"/>

      <div className=" h-full w-full md:h-[600px]">
        <div className="flex flex-col md:flex-row gap-2 h-full">

          {/* Left image */}
          <div className="h-[400px] md:h-full md:w-1/2 overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/4659698/pexels-photo-4659698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team 1"
            />
          </div>
 
          {/* Middle - Right */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 h-full">
            {/* Middle */}
            <div className="grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 gap-2 w-full h-full">
              <div className="overflow-hidden">
                <img
                  className="h-64 w-full md:h-full object-cover"
                  src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team 2"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  className="h-64 w-full md:h-full object-cover"
                  src="https://images.pexels.com/photos/6276046/pexels-photo-6276046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team 3"
                />
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 gap-2 w-full h-full">
              <div className="overflow-hidden">
                <img
                  className="h-64 md:h-full object-cover overflow-hidden"
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team 4"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  className="h-64 md:h-full object-cover overflow-hidden"
                  src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team 5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
