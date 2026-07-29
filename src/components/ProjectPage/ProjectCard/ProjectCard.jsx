import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'igorminerva'; // Change this to your GitHub username
  const REPOS_TO_EXCLUDE = ['igorminerva.github.io']; // Optional: repos to hide

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=100`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        
        // Filter out forked repos and excluded ones, sort by updated date
        const filteredProjects = data
          .filter(repo => !repo.fork && !REPOS_TO_EXCLUDE.includes(repo.name))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        setProjects(filteredProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Row>
        <Col className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Col>
      </Row>
    );
  }

  if (error) {
    return (
      <Row>
        <Col className="text-center">
          <p className="text-danger">Error loading projects: {error}</p>
        </Col>
      </Row>
    );
  }

  if (projects.length === 0) {
    return (
      <Row>
        <Col className="text-center">
          <p>No projects found</p>
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      {projects.map((project) => (
        <Col key={project.id} xs={12} className="mb-4">
          <Card style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', border: '2px solid #333', borderRadius: 0 }}>
            <Card.Img 
              variant="top" 
              src={`https://opengraph.githubassets.com/1/${project.full_name}`}
              style={{width:'350px', height:'100%', minHeight: '220px', objectFit:'cover', backgroundColor: '#222'}}
              onError={(e) => {
                e.target.style.backgroundColor = '#e9ecef';
              }}
            />
            <Card.Body style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text style={{ flex: 1 }}>
                {project.description || 'No description available'}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                {project.language && (
                  <small className="text-muted">{project.language}</small>
                )}
                <div className="d-flex gap-2">
                  {project.homepage && (
                    <Button 
                      variant="secondary" 
                      size="sm"
                      href={project.homepage} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-globe"></i> Visit
                    </Button>
                  )}
                  <Button 
                    variant="primary" 
                    size="sm"
                    href={project.html_url} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i> GitHub
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ProjectCard