import React from 'react'
import VideoPlayer from '@/components/VideoPlayer'
import H2 from "@/components/Typography";

const Testimonial = () => {
  return (
    <div       className="max-w-[1440px] px-18 mx-auto py-20 flex flex-col gap-12"
>
          <H2> PBR FINAL FINAL INTERVIEW WITH DEXA TEAM</H2>

         <div className="w-full rounded-xl overflow-hidden ">
                <VideoPlayer
                  src="/videos/1222.mp4"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
    </div>
  )
}

export default Testimonial