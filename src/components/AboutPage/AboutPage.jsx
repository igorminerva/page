import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutCards from './AboutCards/AboutCards'
import ResumeButton from './ResumeButton/ResumeButton'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate()
  
  const backStyle = {
    fontFamily: 'var(--font-pixel)',
    fontSize: '12px',
    marginTop: '32px',
    cursor: 'pointer',
    color: '#666'
  }

  return (
    <Container className='mb-2' style={{ maxWidth: '100%' }}>
      <Row className="my-4">
        <Col>
          <h1>About Me</h1>
        </Col>
      </Row>
      <AboutCards />
      <ResumeButton />
      <p style={backStyle} onClick={() => navigate('/')}>
        &lt; BACK TO MENU
      </p>
    </Container>
  )
}

export default AboutPage