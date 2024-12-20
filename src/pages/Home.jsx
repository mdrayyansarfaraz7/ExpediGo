import React from 'react'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import TopDestinations from '../components/TopDestinations'
import Customised from '../components/Customised'
import ExploreInternational from '../components/ExploreInternational'
import Advertisement from '../components/Advertisement'
import ReviewSection from '../components/ReviewSection'

function Home() {
    return (
        <>
             <Hero />
            <Explore id="india" />
            <TopDestinations />
            <Customised id="packages" />
            <ExploreInternational id="international" />
            <Advertisement />
            <ReviewSection />
        </>
    )
}

export default Home