import Image from "next/image"
export const UserProfile = () => {
    return (
        <>
            <div className='lg:mt-[4%] sm:mt-[65px] flex flex-col items-center lg:gap-[35px] sm:gap-[15px] pt-[20px] border-4 border-solid border-[#69A0F0] bg-[#1A3468] absolute lg:right-[180px] sm:right-[4%] lg:min-w-[500px] sm:min-w-[350px] sm:h-[calc(100vh-23vh)] lg:h-[800px] z-50 rounded-[50px]'>
                <div className="bg-[#395794] sm:w-[270px] lg:w-[350px] h-[55px] gap-[18px] flex rounded-3xl">
                    <div className="my-[9px] ml-[10px] ">
                        <Image src="/assets/icons/icon-globe.svg" width={40} height={40} alt="globe" />
                    </div>
                    <div className="mt-[25px]">
                        <Image src="/assets/icons/icon-dot.svg" width={32} height={8} alt="***" />
                    </div>
                    <div className="rounded-3xl bg-[#2E4076] lg:w-[230px] sm:w-[150px] h-[45px] mt-[5px] flex flex-col items-center text-[14px]">
                        <div>
                            <h1> Etherum</h1>
                        </div>
                        <div>
                            <h1> 0x2D9508d3C.. </h1>
                        </div>
                    </div>
                </div>
                <div className="bg-[#395794] sm:w-[325px]  lg:w-[415px] h-[155px] rounded-[35px] flex relative">
                    <div className="mt-[25px] lg:ml-[50px] sm:ml-[10px] grid grid-rows-2 grid-cols-2 gap-[10px]">
                        <div>
                            <h1 className="font-semibold text-[18px]"> Your Points </h1>
                            <h1 className="text-center text-[30px] font-bold"> 0 </h1>
                        </div>
                        <div>
                            <h1 className="font-semibold text-[18px]"> Balance </h1>
                            <h1 className="text-[30px] font-bold"> *** </h1>
                        </div>
                    </div>
                    <div className="bg-[#D9D9D9] pt-[10px] lg:w-[140px] sm:w-[120px] h-[135px] mt-[8px] rounded-[30px] absolute right-2 flex flex-col items-center text-black font-bold text-[15px]">
                        <h2 className="text-[20px]"> Your Profile</h2>
                        <h1 className="text-[48px] "> 2.5k</h1>
                        <h3> This Week</h3>
                        <h3 className="text-[#FF1010] cursor-pointer"> Redeem</h3>
                    </div>
                </div>
                <div className="flex  w-fit">
                    <div className=" flex flex-col items-center lg:gap-[35px] sm:gap-[15px] bg-[#395794] sm:w-[325px]  lg:w-[415px] sm:h-[345px] rounded-[35px] lg:h-[450px] pt-[10px] ">
                        <div className="flex justify-between  w-[285px] h-[25px]  ">
                            <div>
                                <h1 className="font-semibold text-[15px] "> Updates</h1>
                            </div>
                            <div>
                                <button className=" ">
                                    <Image src="/assets/icons/icon-log.svg" width={20} height={20} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className=" lg:w-[355px] sm:w-[300px] h-[30px] sm:mt-[7px] lg:mt-[12.5px] rounded-lg border-[0.5px] border-solid border-[#FFF1F1]"> </div>
                        <div className="flex flex-col items-center">
                            <div className="flex lg:w-[355px] sm:w-[300px] h-[50px] sm:mt-[7px] lg:mt-[12.5px] rounded-lg border-[0.5px] border-solid border-[#FFF1F1] sm:gap-[10px] lg:gap-[40px]">
                                <div className="mt-[5px] ml-[5px]">
                                    <div className="rounded-full w-[20px] h-[20px] bg-[#D9D9D9]"> </div>
                                    <div>
                                        <h3 className="text-[12px] font-medium"> Points</h3>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="font-semibold"> Mining Rewards Points!!! </h3>
                                    </div>
                                    <div>
                                        <div className=" rounded-lg bg-red-500 w-[150px] h-[20px] pl-[15px] pt-[1px]">
                                            <h4 className="text-[10px]"> NO 1 Platform</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[url(/assets/images/img-globe.png)]  w-[40px] bg-cover bg-center h-[40px] pt-[8px] pl-[15px] mt-[5px]">
                                    <button className="">
                                       <Image src="/assets/icons/icon-right.svg" alt="" width={11} height={20} /> 
                                    </button>
                                </div>
                            </div>
                            <div className="flex lg:w-[355px] sm:w-[300px] h-[50px] sm:mt-[7px] lg:mt-[12.5px] rounded-lg border-[0.5px] border-solid border-[#FFF1F1] sm:gap-[10px] lg:gap-[40px]">
                                <div className="mt-[5px] ml-[5px]">
                                    <div className="rounded-full w-[20px] h-[20px] bg-[#D9D9D9]"> </div>
                                    <div>
                                        <h3 className="text-[12px] font-medium"> Points</h3>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="font-semibold"> Mining Rewards Points!!! </h3>
                                    </div>
                                    <div>
                                        <div className=" rounded-lg bg-red-500 w-[150px] h-[20px] pl-[15px] pt-[1px]">
                                            <h4 className="text-[10px]"> NO 1 Platform</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[url(/assets/images/img-globe.png)]  w-[40px] bg-cover bg-center h-[40px] pt-[8px] pl-[15px] mt-[5px]">
                                    <button className="">
                                       <Image src="/assets/icons/icon-right.svg" alt="" width={11} height={20} /> 
                                    </button>
                                </div>
                            </div>
                            <div className="flex lg:w-[355px] sm:w-[300px] h-[50px] sm:mt-[7px] lg:mt-[12.5px] rounded-lg border-[0.5px] border-solid border-[#FFF1F1] sm:gap-[10px] lg:gap-[40px]">
                                <div className="mt-[5px] ml-[5px]">
                                    <div className="rounded-full w-[20px] h-[20px] bg-[#D9D9D9]"> </div>
                                    <div>
                                        <h3 className="text-[12px] font-medium"> Points</h3>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="font-semibold"> Mining Rewards Points!!! </h3>
                                    </div>
                                    <div>
                                        <div className=" rounded-lg bg-red-500 w-[150px] h-[20px] pl-[15px] pt-[1px]">
                                            <h4 className="text-[10px]"> NO 1 Platform</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[url(/assets/images/img-globe.png)]  w-[40px] bg-cover bg-center h-[40px] pt-[8px] pl-[15px] mt-[5px]">
                                    <button className="">
                                       <Image src="/assets/icons/icon-right.svg" alt="" width={11} height={20} /> 
                                    </button>
                                </div>
                            </div>
                            <div className="flex lg:w-[355px] sm:w-[300px] h-[50px] sm:mt-[7px] lg:mt-[12.5px] rounded-lg border-[0.5px] border-solid border-[#FFF1F1] sm:gap-[10px] lg:gap-[40px]">
                                <div className="mt-[5px] ml-[5px]">
                                    <div className="rounded-full w-[20px] h-[20px] bg-[#D9D9D9]"> </div>
                                    <div>
                                        <h3 className="text-[12px] font-medium"> Points</h3>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="font-semibold"> Mining Rewards Points!!! </h3>
                                    </div>
                                    <div>
                                        <div className=" rounded-lg bg-red-500 w-[150px] h-[20px] pl-[15px] pt-[1px]">
                                            <h4 className="text-[10px]"> NO 1 Platform</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[url(/assets/images/img-globe.png)]  w-[40px] bg-cover bg-center h-[40px] pt-[8px] pl-[15px] mt-[5px]">
                                    <button className="">
                                       <Image src="/assets/icons/icon-right.svg" alt="" width={11} height={20} /> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block w-14px sm:h-[200px] lg:h-[300px] bg-gray-200 opacity-10 rounded-lg mt-[25%] ml-[10px]"> v </div>
                </div>
            </div>
        </>
    )
}
