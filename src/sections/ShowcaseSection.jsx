import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
         <div className="showcaselayout">
              {/*//? LEFT */}
              <div className="first-project-wrapper">
                <div className="image-wrapper">
                   <img src="/images/myproduct1.png" alt="evenza" className="object-contain" />
                </div>

                <div className="text-content">
                       <h2>Smart AI-powered platform to discover, create, and manage events effortlessly.</h2>
                       <p className="text-white-50 md:text-xl">
                        From personalized event recommendations to seamless creation and real-time management, our AI simplifies every step—helping you organize unforgettable experiences faster and smarter.
                       </p>
                </div>
              </div>
              {/*//? RIGHT */}
         </div>
      </div> 
    </div>
  )
}

export default ShowcaseSection
