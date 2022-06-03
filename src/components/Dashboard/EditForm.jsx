import { useParams } from 'react-router';
import FormEditor from './FormEditor';

const EditForm = ({ active, fields }) => {
  const { projectId, formId } = useParams();
  // console.log(active);

  return (
    <FormEditor
      active={active}
      project={projectId}
      form={formId}
      fields={fields}
    />
  );
};

export default EditForm;
