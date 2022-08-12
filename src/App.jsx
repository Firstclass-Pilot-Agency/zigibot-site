import React from 'react'
import { BrowserRouter, Outlet } from 'react-router-dom'
import { PageMangerContext, usePage } from './Contexts/PageContext'
import { JustMainLogo, RandomTextSection, ShowLogoMain } from './LoadingComponents/LoadingContents'
import Home from './MainSite/Home'
import NavBar from './NavBar'
import JoinWaitList from './PrePage'
import './Styles/index.css'

function App() {
    const { nextPage } = usePage()
    const style = {
        main: {
            height: '100vh',
            background: '#FFF500',
        }
    }

    let CurrentPage = nextPage === 0 ? <RandomTextSection /> :
        (nextPage === 1 ? <ShowLogoMain /> :
            (nextPage === 2 ? <MainPage /> : <></>)
        )
    return (
        <BrowserRouter>
            {/* intit Loading */}
            {CurrentPage}
        </BrowserRouter>
    )
}

function MainPage() {
    return (
        <>
            <NavBar doneLoading={true} />
            <Home />
        </> 
    )
}

export default App

