import Image from "next/image"
export const Sidebar = () => {
    return (
        <>
            <div className="overflow-auto lg:pt-[40px] pr-[3px] sm:pt-[20px] flex flex-col lg:gap-[20px] sm:gap-[15px]  items-center absolute right-0 border z-50 backdrop-blur-md rounded-l-[30px] bg-gradient-to-tr from-[rgba(11, 12, 15, 0.2)] via-[rgba(78, 149, 254, 0.11)] to-transparent via-[rgba(52, 116, 217, 0.17)] lg:w-[30vw] sm:w-[85vw] h-screen">
                <div className="flex flex-col gap-[30px] items-center justify-center lg:w-[500px] sm:w-[315px] lg:min-h-[250px] sm:min-h-[155px] border-[0.2px] border-solid border-[#FFFDFD] bg-[url(/assets/images/side-image.png)] rounded-2xl">
                    <div className="w-full font-semibold flex justify-between mt-[5px] px-[10px] ">
                        <div>
                            <div>
                                <h1 className="text-[22px]"> Total Referrals </h1>
                            </div>
                            <div className="ml-[35px]">
                                <h1 className="text-[36px]"> 0 </h1>
                            </div>
                        </div>
                        <div className="flex gap-[5px] mt-[4px]">
                            <div>
                                <button>
                                    <Image src="/assets/icons/icon-copy.svg" width={16} height={16} alt="copy" />
                                </button>
                            </div>
                            <div>
                                <button>
                                    <Image src="/assets/icons/icon-share.svg" width={16} height={16} alt="copy" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-[7px]">
                        <div className="flex sm:text-[11px] lg:text-[15px] font-semibold gap-[10px] ">
                            <div className="sm:w-[91px] lg:w-[120px] lg:h-[25px] sm:h-[18px] border border-solid border-[#FFF] rounded-[30px] px-[5px]">
                                <h4> Referral Link </h4>
                            </div>
                            <div className="flex gap-[3px]">
                                <div>
                                    <h4> REFD9508d3C....559D6F8F4 </h4>
                                </div>
                                <div>
                                    <button>
                                        <Image src="/assets/icons/icon-copy.svg" width={16} height={16} alt="copy" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=" sm:w-[270px] lg:w-[400px] ml-[25px] h-[1px] bg-[#FFF] "> </div>
                        <div className="flex justify-evenly lg:text-[14px] sm:text-[12px] font-semibold">
                            <div>
                                <div>
                                    <h3> Basic points </h3>
                                </div>
                                <div>
                                    <h3> 0 </h3>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3> Activities Forces </h3>
                                </div>
                                <div>
                                    <h3> 0 </h3>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3> Ecosystem Forces </h3>
                                </div>
                                <div>
                                    <h3> 0 </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex items-center gap-[5px]">
                            <div>
                                <h2 className="font-semibold text-[14px]">
                                    Connection Information
                                </h2>
                            </div>
                            <div>
                                <Image src="/assets/icons/icon-info.svg" width={18} height={18} alt="copy" />
                            </div>
                        </div>
                        <div className="flex gap-[20px]  font-md">
                            <div className=" flex  items-center justify-center gap-[10px] h-[40px] lg:w-[100px] sm:w-[85px] border-[#55565882] border-[0.5px] border-solid rounded-[30px] bg-[#55565882]">
                                <div>
                                    <Image src="/assets/icons/icon-net.svg" width={15} height={15} alt="network" />
                                </div>
                                <div>
                                    <h2 className="lg:text-base sm:text-[11px] font-semibold">
                                        Network
                                    </h2>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-[10px] h-[40px] w-[100px] border-[#55565882] border-[0.5px] border-solid rounded-[30px] bg-[#55565882]">
                                <div>
                                    <Image src="/assets/icons/icon-wallet.svg" width={15} height={15} alt="wallet" />
                                </div>
                                <div>
                                    <h2 className="lg:text-base sm:text-[11px] font-semibold">
                                        Wallet
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center  gap-[23px]">
                            <div>
                                <Image src="/assets/images/logo-shib.png" width={20} height={20} alt="shib-logo" />
                            </div>
                            <div>
                                <h4 className="font-semibold lg:text-[15px] sm:text-[10px]"> 0x2D9508d3C....559D6F8F4 </h4>
                            </div>
                        </div>
                        <div className="h-[0.2px] w-[155px] bg-[#FFFFFF]"> </div>
                        <div className="flex  flex-col">
                            <div className="flex items-center gap-[3px]">
                                <div>
                                    <h2 className="font-medium lg:text-[24px] sm:text-[18px]"> Held Portal NFT </h2>
                                </div>
                                <div>
                                    <Image src="/assets/icons/icon-info.svg" width={18} height={18} alt="copy" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-normal lg:text-base sm:text-[13px] text-[#959595]"> No Portal Series NFT was obtained </h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <div className="sm:w-[80px] lg:w-[125px]">
                            <Image src="/assets/images/shib-qr.png" width={125} height={138} alt="shib-qr" />
                        </div>
                        <div>
                            <Image src="/assets/icons/icon-log.svg" width={30} height={30} alt="***" />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2> Quests </h2>
                    </div>
                    <div className="flex flex-col gap-[18px]">
                        <div className="sm:w-[300px] lg:w-[455px] sm:h-[50px] lg:h-[70px] border-[0.5px] border-solid border-[#D1D1D1] bg-[#2A3E6C] rounded-[15px] flex items-center justify-around ">
                            <div className=" w-[55px] sm:h-[45px] lg:h-[60px] rounded-2xl bg-[#EC1F2F]  flex flex-col items-center justify-center">
                                <h2 className="text-[20px] font-semibold"> 12 </h2>
                                <h4 className="text-[10px]"> 0 Points </h4>
                            </div>
                            <div className="lg:text-[12px] sm:text-[8px] flex flex-col gap-[5px] ">
                                <div className="lg:w-[200px] sm:w-[150px]">
                                    <h4 className="lg:text-[13px] sm:text-[8px]">
                                        Bridge <span className="text-[#EC1F2F]">1Eth</span>from any amount of ETH, from any network to <span className="text-[#EC1F2F]">Portal </span>
                                    </h4>
                                </div>
                                <div className="flex items-center lg:gap-[20px] sm:gap-[10px] ">
                                    <div className="bg-gradient-to-r from-red-500 via-orange-500 to-purple-400 lg:w-[120px] sm:w-[95px] lg:h-[20px] sm:h-[15px] rounded-tr-xl rounded-bl-xl ">
                                        <h3 className="text-center"> Portal Airdrops on! </h3>
                                    </div>
                                    <div className="rounded-lg bg-[#4C4D5A] h-[20px] lg:w-[47px] sm:w-[30px] flex items-center justify-center">
                                        <h4> Q/1 </h4>
                                    </div>
                                    <div>
                                        <h4> June 2-July 25th </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-[300px] lg:w-[455px] sm:h-[50px] lg:h-[70px] border-[0.5px] border-solid border-[#D1D1D1] bg-[#2A3E6C] rounded-[15px] flex items-center justify-around ">
                            <div className=" w-[55px] sm:h-[45px] lg:h-[60px] rounded-2xl bg-[#EC1F2F]  flex flex-col items-center justify-center">
                                <h2 className="text-[20px] font-semibold"> 12 </h2>
                                <h4 className="text-[10px]"> 0 Points </h4>
                            </div>
                            <div className="lg:text-[12px] sm:text-[8px] flex flex-col gap-[5px] ">
                                <div className="lg:w-[200px] sm:w-[150px]">
                                    <h4 className="lg:text-[13px] sm:text-[8px]">
                                        Bridge <span className="text-[#EC1F2F]">1Eth</span>from any amount of ETH, from any network to <span className="text-[#EC1F2F]">Portal </span>
                                    </h4>
                                </div>
                                <div className="flex items-center lg:gap-[20px] sm:gap-[10px] ">
                                    <div className="bg-gradient-to-r from-red-500 via-orange-500 to-purple-400 lg:w-[120px] sm:w-[95px] lg:h-[20px] sm:h-[15px] rounded-tr-xl rounded-bl-xl ">
                                        <h3 className="text-center"> Portal Airdrops on! </h3>
                                    </div>
                                    <div className="rounded-lg bg-[#4C4D5A] h-[20px] lg:w-[47px] sm:w-[30px] flex items-center justify-center">
                                        <h4> Q/1 </h4>
                                    </div>
                                    <div>
                                        <h4> June 2-July 25th </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-[300px] lg:w-[455px] sm:h-[50px] lg:h-[70px] border-[0.5px] border-solid border-[#D1D1D1] bg-[#2A3E6C] rounded-[15px] flex items-center justify-around ">
                            <div className=" w-[55px] sm:h-[45px] lg:h-[60px] rounded-2xl bg-[#EC1F2F]  flex flex-col items-center justify-center">
                                <h2 className="text-[20px] font-semibold"> 12 </h2>
                                <h4 className="text-[10px]"> 0 Points </h4>
                            </div>
                            <div className="lg:text-[12px] sm:text-[8px] flex flex-col gap-[5px] ">
                                <div className="lg:w-[200px] sm:w-[150px]">
                                    <h4 className="lg:text-[13px] sm:text-[8px]">
                                        Bridge <span className="text-[#EC1F2F]">1Eth</span>from any amount of ETH, from any network to <span className="text-[#EC1F2F]">Portal </span>
                                    </h4>
                                </div>
                                <div className="flex items-center lg:gap-[20px] sm:gap-[10px] ">
                                    <div className="bg-gradient-to-r from-red-500 via-orange-500 to-purple-400 lg:w-[120px] sm:w-[95px] lg:h-[20px] sm:h-[15px] rounded-tr-xl rounded-bl-xl ">
                                        <h3 className="text-center"> Portal Airdrops on! </h3>
                                    </div>
                                    <div className="rounded-lg bg-[#4C4D5A] h-[20px] lg:w-[47px] sm:w-[30px] flex items-center justify-center">
                                        <h4> Q/1 </h4>
                                    </div>
                                    <div>
                                        <h4> June 2-July 25th </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}