import { useParams } from 'react-router';
import FormBuilder from './FormBuilder';

const CreateForm = () => {
  const { projectId } = useParams();

  return <FormBuilder project={projectId} />;
};

export default CreateForm;
