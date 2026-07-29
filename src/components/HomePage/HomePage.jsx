import React from 'react'
import GameMenu from './GameMenu/GameMenu'
import HomeCard from './homeCard/HomeCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const HomePage = () => {
    const location = useLocation()
    const showMenu = location.pathname === '/'

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                {showMenu ? (
                    <>
                        <p className="terminal-welcome" style={{ marginBottom: '24px' }}>&gt; MAIN MENU</p>
                        <GameMenu />
                    </>
                ) : (
                    <>
                        <p className="terminal-welcome" style={{ marginBottom: '24px' }}>&gt; PROFILE</p>
                        <HomeCard />
                    </>
                )}
        </div>
    )
}

export default HomePage
