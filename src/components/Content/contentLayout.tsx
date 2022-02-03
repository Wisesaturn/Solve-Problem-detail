import Navigator from './Navigator/Navigator'
import React from 'react'
import SearchArea from './Search_area'

const Layout = ({ children }) => {
    return (
        <div className="contentWrap">
            <Navigator />
            <div className="dataWrap">
                <SearchArea />
                { children }
            </div>
        </div>
    )
}

export default Layout
