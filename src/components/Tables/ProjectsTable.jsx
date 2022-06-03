import { Link } from 'react-router-dom';

const ProjectsTable = ({ projects, readonly }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, i) => (
          <tr key={project._id} className="hover">
            <td>{i + 1}</td>
            <td>
              {readonly ? (
                project.name
              ) : (
                <Link to={project._id} className="hover:underline">
                  {project.name}
                </Link>
              )}
            </td>
            <td>{project.description}</td>
            <td>
              <div
                className={
                  project.active ? 'badge badge-success' : 'badge badge-warning'
                }
              >
                {project.active ? 'active' : 'archive'}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
