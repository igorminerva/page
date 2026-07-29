import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard/ProjectCard'
import { useNavigate } from 'react-router-dom'

const ProjectPage = () => {
    const navigate = useNavigate()

    const backStyle = {
        fontFamily: 'var(--font-pixel)',
        fontSize: '12px',
        marginTop: '32px',
        cursor: 'pointer',
        color: '#666'
    }

    return (
        <div>
            <Container style={{ maxWidth: '100%' }}>
                <Row className="my-4">
                    <Col>
                        <h1>My Projects</h1>
                        <p>Here are some of my best works:</p>
                    </Col>
                </Row>
                <ProjectCard />
            </Container>
            <p style={backStyle} onClick={() => navigate('/')}>
                &lt; BACK TO MENU
            </p>
        </div>
    )
}

export default ProjectPage