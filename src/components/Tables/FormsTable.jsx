import { Link } from 'react-router-dom';

const FormsTable = ({ forms }) => {
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
        {forms.map((form, i) => (
          <tr key={form._id} className="hover">
            <td>{i + 1}</td>
            <td>
              <Link to={`forms/${form._id}`} className="hover:underline">
                {form.name}
              </Link>
            </td>
            <td>{form.description}</td>
            <td>
              <div
                className={
                  form.active ? 'badge badge-success' : 'badge badge-warning'
                }
              >
                {form.active ? 'active' : 'archive'}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FormsTable;
