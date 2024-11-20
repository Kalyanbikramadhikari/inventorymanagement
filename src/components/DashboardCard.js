import React from 'react'

const DashboardCard = ({ percentage, name, amount }) => {
    return (
        // <div className="pt-1 px-[35px] flex flex-col">
        <div className='flex-1 flex flex-col gap-5  border border-inputField-border rounded-borderRadius  p-6'>
            <div className="flex justify-between">
                <div className="flex gap-5 -mx-6">
                    <div className="w-[6px] bg-primary rounded-r-[20px] "></div>
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="45" height="45" rx="4.5" fill="white" stroke="#D9D9D9" />
                        <path d="M23.5 11L34 16.3362V29.6766L23.5 35L13 29.6766V16.3362L23.5 11ZM31.3876 16.8493L23.5 12.8471L20.4585 14.3864L28.2957 18.4142L31.3876 16.8493ZM23.5 20.8514L26.5036 19.3378L18.6538 15.31L15.6124 16.8493L23.5 20.8514ZM14.6154 18.1833V28.6505L22.6923 32.7552V22.2881L14.6154 18.1833ZM24.3077 32.7552L32.3846 28.6505V18.1833L24.3077 22.2881V32.7552Z" fill="#99A0A5" />
                    </svg>
                </div>


                <div className={`flex justify-center items-center gap-2 rounded-borderRadius ${percentage > 0 ? ' bg-success-background text-success-text' : ' bg-error-background text-error-text'} p-[6px] px-[10px]`}>
                    {
                        percentage > 0 ? (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.7 1C9.7 0.613401 9.3866 0.3 9 0.3H2.7C2.3134 0.3 2 0.613401 2 1C2 1.3866 2.3134 1.7 2.7 1.7H8.3V7.3C8.3 7.6866 8.6134 8 9 8C9.3866 8 9.7 7.6866 9.7 7.3V1ZM8.50503 0.505025L0.505025 8.50503L1.49497 9.49498L9.49498 1.49497L8.50503 0.505025Z" fill="#0ECA24" />
                            </svg>


                        ) : (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 9.7C9.3866 9.7 9.7 9.3866 9.7 9L9.7 2.7C9.7 2.3134 9.3866 2 9 2C8.6134 2 8.3 2.3134 8.3 2.7L8.3 8.3L2.7 8.3C2.3134 8.3 2 8.6134 2 9C2 9.3866 2.3134 9.7 2.7 9.7L9 9.7ZM9.49497 8.50503L1.49497 0.505025L0.505025 1.49497L8.50502 9.49498L9.49497 8.50503Z" fill="#CA0E0E" />
                            </svg>

                        )
                    }
                    {percentage} %
                </div>


            </div>
            <div className="flex flex-col">
                <span className='text-[13px] text-[#7A8299] font-medium'>{name}</span>
                <h1 className='text-[29px]'>{amount}</h1>
            </div>


        </div>
    )
}

export default DashboardCard