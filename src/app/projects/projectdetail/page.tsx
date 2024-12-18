import React from 'react';

type User = {
  id: number;
  name: string;
};

type Task = {
  id: number;
  name: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed';
};

type Project = {
  id: number;
  name: string;
  description: string;
  assignedUsers: User[];
  tasks: Task[];
};

const projects: Project[] = [
  {
    id: 1,
    name: 'AI Cryptographic Identifier',
    description: 'A project focused on using AI/ML techniques to identify cryptographic algorithms from datasets.',
    assignedUsers: [
      { id: 101, name: 'Alice' },
      { id: 102, name: 'Bob' },
    ],
    tasks: [
      { id: 1, name: 'Dataset Collection', description: 'Gather cryptographic datasets.', status: 'Pending' },
      { id: 2, name: 'Model Training', description: 'Train the model on the datasets.', status: 'In Progress' },
      { id: 3, name: 'Performance Evaluation', description: 'Evaluate the model accuracy.', status: 'Pending' },
    ],
  },
  {
    id: 2,
    name: 'Educational Resource Hub',
    description: 'An application to streamline access to resources, notes, and exam papers for students.',
    assignedUsers: [
      { id: 103, name: 'Charlie' },
      { id: 104, name: 'Diana' },
    ],
    tasks: [
      { id: 4, name: 'Frontend Design', description: 'Create the UI for the application.', status: 'Completed' },
      { id: 5, name: 'Backend Development', description: 'Implement APIs for resource management.', status: 'In Progress' },
      { id: 6, name: 'Testing and Debugging', description: 'Test the application thoroughly.', status: 'Pending' },
    ],
  },
];

const ProjectPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-teal-100 to-indigo-200 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-10">Project Management</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{project.name}</h2>
            <p className="text-gray-700 mb-6">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-gray-800 font-medium text-xl mb-2">Assigned Users:</h3>
              <ul className="list-disc ml-6 text-gray-600">
                {project.assignedUsers.map((user) => (
                  <li key={user.id} className="text-md">{user.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-gray-800 font-medium text-xl mb-2">Tasks:</h3>
              <ul className="list-disc ml-6 text-gray-600">
                {project.tasks.map((task) => (
                  <li key={task.id} className="mb-4">
                    <strong className="text-lg text-gray-800">{task.name}</strong>: {task.description}
                    <span
                      className={`text-sm font-semibold ml-2 ${
                        task.status === 'Completed'
                          ? 'text-green-600'
                          : task.status === 'In Progress'
                          ? 'text-blue-600'
                          : 'text-red-600'
                      }`}
                    >
                      ({task.status})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
