import React from 'react'
import { Card } from 'react-bootstrap'

const SkillCard = () => {
    const cardTitleStyle = {
        fontFamily: 'var(--font-pixel)',
        fontSize: '14px',
        marginBottom: '16px'
    }

    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title style={cardTitleStyle}>&gt; SKILLS</Card.Title>
                <Card.Text>
                    <strong>Programming Languages</strong>
                    <ul>
                        <li>GDScript</li>
                        <li>Java</li>
                        <li>JavaScript - FrameWorks: React.js / React native</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>PHP</li>
                        <li>HTML/CSS</li>
                        <li>MySql</li>
                    </ul>
                    <strong>Technologies</strong>
                    <ul>
                        <li>Godot Engine</li>
                        <li>Git</li>
                        <li>Google Docs / spreadsheets</li>
                        <li>Microsoft Office</li>
                        <li>Blender</li>
                        <li>Linux</li>
                    </ul>
                    <strong>Languages</strong>
                    <ul>
                        <li>Italian</li>
                        <li>English</li>
                        <li>Portuguese</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SkillCard