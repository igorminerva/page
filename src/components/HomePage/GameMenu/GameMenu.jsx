import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const GameMenu = () => {
    const navigate = useNavigate()

    const menuItemStyle = {
        fontFamily: 'var(--font-pixel)',
        fontSize: '16px',
        padding: '12px 24px',
        margin: '8px 0',
        cursor: 'pointer',
        border: '2px solid #333',
        background: '#222',
        color: '#fff',
        transition: 'all 0.2s',
        width: '100%',
        textAlign: 'center'
    }

    const menuItemHoverStyle = {
        ...menuItemStyle,
        background: '#fff',
        color: '#111',
        boxShadow: '4px 4px 0 #666'
    }

    const [hoveredBtn, setHoveredBtn] = React.useState(null)

    const asciiArt = `__     __     ______     __         ______     ______     __    __     ______    
/\\ \\  _ \\ \\   /\\  ___\\   /\\ \\       /\\  ___\\   /\\  __ \\   /\\ "-./  \\   /\\  ___\\   
\\ \\ \\/ ".\\ \\  \\ \\  __\\   \\ \\ \\____  \\ \\  ____  \\ \\  /\\ \\  \\ \\  -./\\ \\  \\ \\  __\\   
 \\ \\__/".~\\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\ \\_____\\ 
  \\/_/   \\/_/   \\/_____/   \\/_____/   \\/_____/   \\/_____/   \\/_/  \\/_/   \\/_____/ `

    return (
        <Row className='justify-content-center'>
            <Card className="card mb-3" style={{ maxWidth: '520px' }}>
                <Card.Body>
                    <Card.Text>
                        <pre className="ascii-art" style={{ fontSize: '7px' }}>{asciiArt}</pre>

                        <p style={{ 
                            fontFamily: 'var(--font-pixel)', 
                            fontSize: '10px', 
                            textAlign: 'center',
                            marginBottom: '24px',
                            color: '#888'
                        }}>
                            SELECT OPTION
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <button 
                                style={hoveredBtn === 'start' ? menuItemHoverStyle : menuItemStyle}
                                onMouseEnter={() => setHoveredBtn('start')}
                                onMouseLeave={() => setHoveredBtn(null)}
                                onClick={() => navigate('/profile')}
                            >
                                &gt; START
                            </button>

                            <button 
                                style={hoveredBtn === 'about' ? menuItemHoverStyle : menuItemStyle}
                                onMouseEnter={() => setHoveredBtn('about')}
                                onMouseLeave={() => setHoveredBtn(null)}
                                onClick={() => navigate('/aboutme')}
                            >
                                &gt; ABOUT
                            </button>

                            <button 
                                style={hoveredBtn === 'projects' ? menuItemHoverStyle : menuItemStyle}
                                onMouseEnter={() => setHoveredBtn('projects')}
                                onMouseLeave={() => setHoveredBtn(null)}
                                onClick={() => navigate('/projects')}
                            >
                                &gt; PROJECTS
                            </button>
                        </div>

                        <p style={{ 
                            fontFamily: 'var(--font-pixel)', 
                            fontSize: '8px', 
                            textAlign: 'center',
                            marginTop: '32px',
                            color: '#555'
                        }}>

                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default GameMenu
