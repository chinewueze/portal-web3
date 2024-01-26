"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { ConnectModal } from '@/components/Modal/modal';
export default function Home() {
  const [selectedValue, setSelectedValue] = useState('');
  const [selected, setSelected] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false)
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };
  const handleInputChange = (event) => {
    const numericInput = event.target.value.replace(/[^0-9]/g, '');
    setInputValue(numericInput);
  };
  const handleClick = () => {
    setShowModal(true)
  }
  useEffect(() => {
    if (showModal) {
      const closeTimeout = setTimeout(() => {
        setShowModal(false)
      }, 2000)
      return () => clearTimeout(closeTimeout)
    }
  }, [showModal])
  return (
    <main>
      {showModal &&
        <div>
          <ConnectModal />
        </div>
      }
      <div className="w-full  flex  items-center justify-center px-[15px] ">
        <div className='  flex flex-col'>
          <div className='place-self-end sm:mr-0 lg:mr-[55px]'>
            <button
              onClick={handleClick}
              className='h-[40px] lg:w-[186px] bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)]  backdrop-blur-md px-[31px] py-[5px] sm:w-[149px] border border-solid border-[#3474D9] rounded-3xl lg:mt-[10px] sm:[mt-45px] mb-[15px]'
            >
              Connect
            </button>
          </div>
          <div className='  shrink-0 lg:min-h-[280px] lg:min-w-[885px] sm:min-w-[300px] sm:min-h-[241px]  border border-solid border-[#3474D9] backdrop-blur-md rounded-3xl bg-gradient-to-br from-[rgba(11, 12, 15, 0.20)] via-[rgba(78, 149, 254, 0.11)] to-[rgba(251, 251, 251, 0.00)] bg-opacity-0 to-[rgba(52, 116, 217, 0.17)]'>
            <div className=' absolute top-0 left-[56px] w-[115px] h-[40px] border border-solid border-[#3474D9] rounded-3xl inline-flex px-[31px] py-[5px] justify-center items-center gap-[10px] @apply bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)] bg-[rgba(52,116,217,0.17)] backdrop-blur-sm'>
              <h2 className='font-semibold text-[20px]'>
                From
              </h2>
            </div>
            <div>
              <div className=' w-[750px] mt-[65px] lg:ml-[50px] sm:ml-[10px] flex flex-col pl-[15px] gap-y-[15px]'>
                <div className='flex  items-center'>
                  <div>
                    <Image src="/assets/images/eth-logo.svg" width={30} height={30} alt="eth-logo" />
                  </div>
                  <div className='ml-[7px] mt-[2px]'>
                    <Select
                      className='w-[275px] text-white lg:h-[48px] sm:h-[35px] border border-solid border-[#3474D9] rounded-lg @apply bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)] bg-[rgba(52,116,217,0.17)] backdrop-blur-sm'
                      value={selectedValue}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label', }}
                    >
                      <MenuItem value="" >
                        USDC(Etherum)
                      </MenuItem>
                      <MenuItem value="option1"> Etherum </MenuItem>
                      <MenuItem value="option1"> Uniswap </MenuItem>
                    </Select>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <Image src="/assets/images/usd-logo.svg" width={30} height={30} alt="eth-logo" />
                  </div>
                  <div className='ml-[7px]'>
                    <TextField
                      className='w-[275px] text-white lg:h-[48px] sm:h-[35px] border border-solid border-[#3474D9] rounded-lg @apply bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)] bg-[rgba(52,116,217,0.17)] backdrop-blur-sm'
                      placeholder="Amount"
                      value={inputValue}
                      onChange={handleInputChange}
                      type="text"
                      inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        style: { color: 'white' },
                      }}
                    />
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <Image src="/assets/images/bal-logo.png" width={30} height={30} alt="eth-logo" />
                  </div>
                  <div className='ml-[7px] flex  lg:w-[575px] sm:w-[300px] lg:h-[48px] sm:h-[35px] border border-solid border-[#3474D9] rounded-lg @apply bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)] bg-[rgba(52,116,217,0.17)] backdrop-blur-sm'>
                    <div className='w-[66px] h-[24px] ml-[16px] lg:mt-[14px] sm:mt-[8px]'>
                      <h4> Balance </h4>
                    </div>
                    <div className='flex ml-[47px] lg:mt-[10px] sm:mt-[4px] justify-around'>
                      <div>
                        <Image src="/assets/images/bal-input.png" width={30} height={30} alt="bal" />
                      </div>
                      <div>
                        <Image src="/assets/images/bal-input.png" width={30} height={30} alt="bal" />
                      </div>
                      <div>
                        <Image src="/assets/images/bal-input.png" width={30} height={30} alt="bal" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex flex-col'>
            <div className='flex items-center justify-center gap-4 py-2'>
              <div className='bg-[#FFFFFF] w-[330px] h-[1px]'></div>
              <div className=''>
                <button>
                  <Image src="/assets/icons/icon-swap.svg" width={70} height={70} alt="swap" />
                </button>
              </div>
              <div className='bg-[#FFFFFF] w-[330px] h-[1px]'> </div>
            </div>
            <div className='place-self-end sm:mr-0 lg:mr-[55px]'>
              <button
                onClick={handleClick}
                className='h-[38px] lg:w-[186px] bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)]  backdrop-blur-md px-[31px] py-[5px] sm:w-[149px] border border-solid border-[#3474D9] rounded-3xl lg:mt-[5px] sm:[mt-45px] mb-[10px]'
              >
                Connect
              </button>
            </div>
          </div>
          <div className=' lg:min-h-[280px] lg:min-w-[885px] sm:min-w-[300px] sm:min-h-[241px]  border border-solid border-[#3474D9] backdrop-blur-md  rounded-3xl bg-gradient-to-br from-[rgba(11, 12, 15, 0.20)] via-[rgba(78, 149, 254, 0.11)] to-[rgba(251, 251, 251, 0.00)] bg-opacity-0 to-[rgba(52, 116, 217, 0.17)]'>
            <div className=' absolute top-0 left-[56px] w-[87px] h-[40px] border border-solid border-[#3474D9] rounded-3xl inline-flex px-[31px] py-[5px] justify-center items-center gap-[10px] @apply bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)] bg-[rgba(52,116,217,0.17)] backdrop-blur-sm'>
              <h2 className='font-semibold text-[20px]'>
                To
              </h2>
            </div>
            <div>
              <div className=' w-[750px] mt-[65px] lg:ml-[50px] sm:ml-[10px] flex flex-col pl-[15px] gap-y-[15px]'>
                <div className='flex  items-center'>
                  <div>
                    <Image src="/assets/images/eth-logo.svg" width={30} height={30} alt="eth-logo" />
                  </div>
                  <div className='ml-[7px] mt-[2px]'>
                    <Select
                      className='w-[275px] text-white lg:h-[48px] sm:h-[35px] border border-solid border-[#3474D9] rounded-lg @apply bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)] bg-[rgba(52,116,217,0.17)] backdrop-blur-sm'
                      value={selected}
                      onChange={handleSelectChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label', }}
                    >
                      <MenuItem value="" >
                        USDC(Etherum)
                      </MenuItem>
                      <MenuItem value="option1"> Etherum </MenuItem>
                      <MenuItem value="option1"> Uniswap </MenuItem>
                    </Select>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <Image src="/assets/images/usd-logo.svg" width={30} height={30} alt="eth-logo" />
                  </div>
                  <div className='ml-[7px]'>
                    <TextField
                      className='w-[275px] text-white lg:h-[48px] sm:h-[35px] border border-solid border-[#3474D9] rounded-lg @apply bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)] bg-[rgba(52,116,217,0.17)] backdrop-blur-sm'
                      placeholder="Amount"
                      value={inputValue}
                      onChange={handleInputChange}
                      type="text"
                      inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        style: { color: 'white' },
                      }}
                    />
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <Image src="/assets/images/bal-logo.png" width={30} height={30} alt="eth-logo" />
                  </div>
                  <div className='ml-[7px] flex  lg:w-[575px] sm:w-[300px] lg:h-[48px] sm:h-[35px] border border-solid border-[#3474D9] rounded-lg @apply bg-gradient-to-r from-[rgba(11,12,15,0.2)] via-[rgba(78,149,254,0.11)] to-[rgba(251,251,251,0)] bg-[rgba(52,116,217,0.17)] backdrop-blur-sm'>
                    <div className='w-[66px] h-[24px] ml-[16px] lg:mt-[14px] sm:mt-[8px]'>
                      <h4> Balance </h4>
                    </div>
                    <div className='flex ml-[47px] lg:mt-[10px] sm:mt-[4px] justify-around'>
                      <div>
                        <Image src="/assets/images/bal-input.png" width={30} height={30} alt="bal" />
                      </div>
                      <div>
                        <Image src="/assets/images/bal-input.png" width={30} height={30} alt="bal" />
                      </div>
                      <div>
                        <Image src="/assets/images/bal-input.png" width={30} height={30} alt="bal" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
