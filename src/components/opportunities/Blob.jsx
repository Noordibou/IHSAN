import React from 'react'
import Image from 'next/image'

function Blob() {
    return (
        <div className="relative h-[5px] mt-[10px]  z-0">
            <Image
                src="/vector2.svg"
                width={930}
                height={10}
                alt="hired"
                className=' h-[520px] lg:w-[100rem] z-0'
            />
        </div>
    )
}

export default Blob