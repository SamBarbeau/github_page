import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

    const projects = [
        { name: 'Project 1', path: '/project1' },
        { name: 'Project 2', path: '/project2' },
        { name: 'Project 3', path: '/project3' },
    ];

    const navigateToProject = (path) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col items-center space-y-4 mt-10">
            {projects.map((project, index) => (
                <button
                    key={index}
                    onClick={() => navigateToProject(project.path)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                    {project.name}
                </button>
            ))}
        </div>
    );
};

export default Projects;