import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const LandingPageLayout = ({children}:any) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default LandingPageLayout