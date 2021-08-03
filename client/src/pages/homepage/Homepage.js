import React from 'react'
import MainSide from '../../components/MainSide/MainSide';
import RightSide from '../../components/RightSide/RightSide';
import HomepageContent from '../../components/Homepage/Homepage';
import './Homepage.css'
function Homepage(props) {
    return <div className="homepage">
        <MainSide />
        <RightSide />
        <HomepageContent />
    </div>
}

export default Homepage;