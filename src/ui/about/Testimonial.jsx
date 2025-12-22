import React from 'react'
import VideoPlayer from '@/components/VideoPlayer'

const Testimonial = () => {
  return (
    <div>
          <H2> PBR FINAL FINAL INTERVIEW WITH DEXA TEAM</H2>

         <div className="w-full rounded-xl overflow-hidden p-32">
                <VideoPlayer
                  src="/videos/1222.mp4"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
    </div>
  )
}

export default Testimonial