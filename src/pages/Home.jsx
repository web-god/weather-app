import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <img src="images/sunny.jpg" alt="" />

        <div className="w-3/5 h-48  absolute left-0 bottom-24 text-white text-9xl p-8 flex ">
          <span className="px-4 animate-bounce">28°</span>
          <div><div className="text-6xl">Bangalore</div>
          <div className="text-3xl mt-4">4:25-Wed,3 March'23</div>
          </div>
          <img src="images/sun.png" alt="" className="px-8 animate-pulse " />
        </div>
        
        <div className="w-2/5 h-full bg-gray-900 absolute top-0 right-0 opacity-75 ">
          <div className="flex h-20 justify-between px-7 pt-4 mb-12  ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Another location"
              className=" px-52 opacity-40 hover:opacity-100 py-4"
            />
            <div className="border border-orange-100 rounded-xl px-6 py-5">
              <img src="images/search.png" alt="" className="w-8 h-8 hover:animate-bounce" />
            </div>
          </div>

          <div className=" w-full h-56  text-xl ">
            <ul className="px-2 text-white">
              <li className="p-6" >Patna</li>
              <li className="p-6" >Bangalore</li>
              <li className="p-6" >Pune</li>
              <li className="p-6" >Kolkata</li>
              <hr className="mr-16 ml-7 mt-"/>
            </ul>
          </div>

          <div className=" w-full h-56  text-xl my-28 ">
            <ul className="px-2 text-white">
              <li className="p-6 font-bold" >Weather Deatils</li>
              <li className="p-6" >Cloudy</li>
              <li className="p-6" >Humidity</li>
              <li className="p-6" >Wind</li>
              <hr className="mr-16 ml-7 mt-"/>
            </ul>
          </div>

         
        </div>
        
      </div>
    </>
  );
};

export default Home;
