import React from 'react'

const NumbersCard = ({name, amount}) => {
    return (
        // <div className="pt-1 px-[35px] flex flex-col">
        <div className='flex-1 flex gap-5  border border-inputField-border rounded-borderRadius  p-6'>
            <div className="flex">
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="23.5" cy="23.5" r="23" fill="#F9FAFB" stroke="#ECEDEF" />
                    <path d="M34 32.478V29.0189C34 28.0503 33.8571 27.0818 33.2857 26.1132C32.7143 25.1447 32 24.3145 31 23.761C30 23.0692 27.8571 22.9308 26.8571 22.9308L24.5714 25.283L25.4286 27.0818V31.2327L24 32.7547L22.5714 31.2327V27.0818L23.5714 25.283L21.1429 22.9308C20 22.9308 17.8571 23.0692 16.8571 23.761C15.8571 24.3145 15.2857 25.1447 14.7143 26.1132C14.1429 27.0818 14 27.9119 14 29.0189V32.478C14 32.478 17.7143 34 24 34C30.2857 34 34 32.478 34 32.478ZM24 12C21.2857 12 19.7143 14.4906 20.1429 17.2579C20.5714 20.0252 22 21.9623 24 21.9623C26 21.9623 27.4286 20.0252 27.8571 17.2579C28.2857 14.3522 26.7143 12 24 12Z" fill="#99A0A5" />
                </svg>

            </div>
            <div className="flex flex-col">
                <span className='text-subHeading text-[#7A8299] font-medium'>{name}</span>
                <h1 className='text-[32px]'>{amount}</h1>
            </div>


        </div>
    )
}

export default NumbersCard