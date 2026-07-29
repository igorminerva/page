import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

import PICard from './PICard/PICard';
import EducationCard from './EducationCard/EducationCard';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import SkillCard from './SkillCard/SkillCard';
import HobbyCard from './HobbyCard/HobbyCard';

const AboutCards = () => {
    return (
        <Row>
            <Col xs={12}>
                <PICard/>
                <EducationCard/>
                <ExperienceCard/>
                <SkillCard/>
                <HobbyCard/>
            </Col>
        </Row>
    )
}

export default AboutCards