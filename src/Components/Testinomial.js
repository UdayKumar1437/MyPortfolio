import React from 'react'

const Testinomial = () => {
  return (
    <div className='flex px-[15%] iPhoneSE:px-[5%] laptop:px-[15%] items-center py-[5%] iPhoneSE:flex-col iPadMini:flex-row bg-gradient-to-r from-slate-100 via-orange-100 to-pink-50 rounded-2xl'>
        <div>
            <img src='https://media.licdn.com/dms/image/D5603AQGBG7PsEs9-rw/profile-displayphoto-shrink_800_800/0/1687195381405?e=1717632000&v=beta&t=pHUXBMPqeBU9pJCEmDA3cu3QdKyfu5gQ3AndUliDS-Y' className='min-w-[250px] min-h-[250px] rounded-2xl max-h-[200px] max-w-[200px] shadow-sm shadow-pink-100' alt=''/>
        </div>
        <div className='flex flex-col text-start px-[5%] gap-8 leading-snug'>
            <h1 className='w-fit text-xl font-semibold'>“Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.“</h1>
            <div className='flex flex-col gap-1'>
                <h1>Judith Black</h1>
                <p>CEO of Workcation</p>
            </div>
        </div>
    </div>
  )
}

export default Testinomial