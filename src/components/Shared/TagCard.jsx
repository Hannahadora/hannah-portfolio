import React from 'react'

const TagCard = ({tag}) => {
  return (
    <div className='bg-[#d4d4d480] rounded px-[8px] py-[3px] md:text-[14px] text-[12px] text-[#000] font-medium'>
        {tag}
    </div>
  )
}

export default TagCard