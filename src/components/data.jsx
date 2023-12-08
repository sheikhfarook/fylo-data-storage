import flyo from "../assets/images/logo.svg";
import upload from "../assets/images/icon-upload.svg";
import folder from "../assets/images/icon-folder.svg";
import file from "../assets/images/icon-document.svg";

const Storage = () => {
  return (
    <div className="gap-[3rem] lg:mt-[24rem] justify-center max-sm:mt-[10rem] max-md:mt-[15rem] md:mt-[18.5rem] md:flex-col lg:flex  lg:flex-row">
      {/* to add the image in this div  */}
      <div
        className="w-[20rem] h-[10rem] rounded-lg rounded-tr-[6rem] bg-[#1D2C67] 
      max-sm:m-auto max-sm:w-[20rem] max-sm:h-[13rem] max-md:m-auto md:m-auto lg:m-0">
        <div className="ml-10 mt-8 md:justify-center  ">
          <img
            className="w-32 max-md:pt-8 max-sm:w-[11rem] md:pt-8 lg:pt-0 "
            src={flyo}
            alt=""
          />
          <div className="flex mt-4 gap-4 max-sm:gap-5 max-sm:mt-10">
            <div className=" rounded-lg w-[40px] h-[40px] bg-black max-sm:w-[3.5rem] max-sm:h-[3.5rem]">
              <img
                className="m-auto mt-2 w-[19px] max-sm:mt-3 max-sm:w-[25px] "
                src={file}
                alt=""
              />
            </div>
            <div className=" rounded-lg w-[40px] h-[40px]  bg-black max-sm:w-[3.5rem] max-sm:h-[3.5rem] ">
              <img
                className=" m-auto mt-[11px] w-[22px] max-sm:mt-4 max-sm:w-[30px] "
                src={folder}
                alt=""
              />
            </div>
            <div className=" rounded-lg w-[40px] h-[40px]  bg-black max-sm:w-[3.5rem] max-sm:h-[3.5rem] ">
              <img
                className="  m-auto mt-3  w-[22px] max-sm:mt-4 max-sm:w-[33px]"
                src={upload}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div
        className=" text-white bg-[#1D2C67] font-raleway w-[35rem] mt-9 rounded-lg 
     max-sm:w-[20rem] max-sm:h-[10rem] max-sm:m-auto max-md:m-auto max-md:h-[9rem] md:m-auto md:mt-10 md:h-[10rem] lg:h-[8rem] lg:m-4 lg:mt-8">
        {/* gb left  */}

        {/*  */}
        <div className="  mt-7 text-[14px] text-[#e6e5f4] max-sm:pt-7 max-md:pt-7  max-md:mt-10 md:pt-7 lg:pt-0">
          <p className="ml-[2.5rem] max-sm:ml-14  ">
            You've used
            <span className="font-[700] text-[#DDDBFF]"> 815 GB</span> of your
            storage
          </p>
          {/* storage */}
          <div className="bg-[#0C122C] m-auto w-[30rem] h-[1rem] rounded-lg mt-3 max-sm:w-[17.5rem] max-sm:ml-5">
            <div className="w-[23.5rem] h-[1.1rem] bg-[#FF4D97] rounded-lg border-2 border-black max-sm:w-[13.5rem]  ">
              <div className=" rounded-lg">
                <div className=" w-[0.8rem] my-[0.5px] rounded-full h-[0.8rem] ml-[22.5rem] bg-white max-sm:ml-[12.4rem]"></div>
              </div>
            </div>
          </div>
          <div className=" flex justify-between  mt-2 font-[700] text-[#DDDBFF] text-[14px] ">
            <div className="max-sm:ml-[1.5rem] ml-10">0 GB</div>
            <div className="max-sm:mr-[1.5rem] mr-10">1000GB</div>
          </div>
        </div>
        <div className="relative w-[10rem] m-auto mr-12 h-[4rem] bg-white text-black rounded-lg  max-sm:mt-[9.5rem] max-sm:mr-[5rem] ">
          <div className=" mt-[-8rem] ml-4  ">
            <p className="text-sm font-[600] text-[#848794]">
              <span className=" font-[700] text-3xl text-[black] mr-2 ">
                185
              </span>{" "}
              GB LEFT
            </p>
          </div>
          <div
            className=" w-2 border-t-[30px] border-white border-l-[29px] 
          border-l-transparent border-r-transparentmd:mt-3 max-sm:ml-0 max-sm:mt-0 
          max-md:ml-[131px] max-md:mt-3 md:mt-3 md:ml-[131px] lg:mt-3 lg:ml-[131px] "></div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
