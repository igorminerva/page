import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HomeCard = () => {
    const navigate = useNavigate()

    const headingStyle = {
        fontFamily: 'var(--font-pixel)',
        fontSize: '24px',
        marginBottom: '24px',
        textShadow: '2px 2px 0 #333'
    }

    const subheadingStyle = {
        fontFamily: 'var(--font-pixel)',
        fontSize: '12px',
        marginBottom: '32px',
        lineHeight: '1.8'
    }

    const sectionStyle = {
        fontFamily: 'var(--font-pixel)',
        fontSize: '14px',
        marginTop: '32px',
        marginBottom: '24px'
    }

    const paragraphStyle = {
        marginBottom: '16px',
        lineHeight: '1.6',
        color: '#bbb'
    }

    const backStyle = {
        fontFamily: 'var(--font-pixel)',
        fontSize: '12px',
        marginTop: '32px',
        cursor: 'pointer',
        color: '#666'
    }

    const asciiArt = ` __     ______     ______     ______        __    __     __     __   __     ______     ______     __   __   ______   
/\\ \\   /\\  ___\\   /\\  __ \\   /\\  == \\      /\\ "-./  \\   /\\ \\   /\\ "-.\\ \\   /\\  ___\\   /\\  == \\   /\\ \\ / /  /\\  __ \\  
 \\ \\ \\  \\ \\ \\__ \\  \\ \\  /\\ \\  \\ \\  __<      \\ \\  -./\\ \\  \\ \\ \\  \\ \\ -.  \\  \\ \\  __\\   \\ \\  __<   \\ \\  \\'/   \\ \\  __ \\ 
  \\ \\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_\\ \\_\\     \\ \\_\\ \\ \\_\\  \\ \\_\\  \\ _\\\\"\\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\__|    \\ \\_\\ \\_\\ 
   \\/_/   \\/_____/   \\/_____/   \\/_/ /_/      \\/_/  \\/_/   \\/_/   \\/_/ \\/_/   \\/_____/   \\/_/ /_/   \\/_/      \\/_/\\/_/`

    return (
        <Card className="card mb-3" style={{ maxWidth: '100%' }}>
            <Card.Body>
                <pre className="ascii-art">{asciiArt}</pre>

                <h2 style={headingStyle}>
                    IGOR MINERVA<span className="cursor"></span>
                </h2>

                <p style={subheadingStyle}>
                    GAME DESIGNER | GODOT DEV | CREATIVE PROBLEM SOLVER<br />
                    <a href="https://iocandux.itch.io/" target="_blank" rel="noopener noreferrer">[ITCH.IO]</a>
                </p>

                <p style={paragraphStyle}>
                    I'm a game designer and developer focused on creating immersive interactive experiences. 
                    I specialize in <strong>Godot Engine</strong> and have a passion for game design that 
                    pushes boundaries and creates memorable player experiences.
                </p>

                <hr style={{ borderColor: '#333', margin: '32px 0' }} />

                <h3 style={sectionStyle}>
                    &gt; WHAT I DO
                </h3>
                <p style={paragraphStyle}>
                    I design and develop games from concept to release, with expertise in gameplay mechanics, 
                    level design, and narrative integration. Whether it's 2D pixel art adventures or 
                    experimental gameplay systems, I love bringing creative visions to life.
                </p>

                <hr style={{ borderColor: '#333', margin: '32px 0' }} />

                <h3 style={sectionStyle}>
                    &gt; MY APPROACH
                </h3>
                <p style={paragraphStyle}>
                    I believe great games come from understanding what makes interactions meaningful. 
                    I combine technical skill in Godot with design thinking to create experiences 
                    that resonate with players. My background in problem-solving helps me tackle 
                    complex game mechanics and technical challenges.
                </p>

                <hr style={{ borderColor: '#333', margin: '32px 0' }} />

                <h3 style={sectionStyle}>
                    &gt; LET'S CONNECT
                </h3>
                <p style={paragraphStyle}>
                    Check out my games on itch.io, or reach out to collaborate on game projects, 
                    discuss game design, or explore new opportunities in game development.
                </p>

                <p style={backStyle} onClick={() => navigate('/')}>
                    &lt; BACK TO MENU
                </p>
            </Card.Body>
        </Card>
    )
}

export default HomeCard
