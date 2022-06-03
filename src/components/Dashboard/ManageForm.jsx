import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Auth } from '../../contexts/Auth';
import EditForm from '../Dashboard/EditForm';
import { getUsersByIds } from '../../hooks/useAuth';
import { getProject } from '../../hooks/useProject';
import { getForm } from '../../hooks/useForm';
import CTA from '../CTA/CTA';
import EditModal from '../Modals/EditModal';
import ArchiveModal from '../Modals/ArchiveModal';
import DeleteModal from '../Modals/DeleteModal';
import { ShareFormModal } from '../Modals/FormModal';
import PageTitle from '../Typography/PageTitle';
import PageButton from '../Typography/PageButton';
import ShareAlert, { ShareHelpAlert } from '../Alerts/ShareAlert';

const ManageForm = () => {
  const [auth] = useContext(Auth);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [active, setActive] = useState('');
  const [shareTo, setShareTo] = useState('');
  const [addedUsers, setAddedUsers] = useState([]);
  const [projectActive, setProjectActive] = useState();
  const [fields, setFields] = useState([]);
  const [owner, setOwner] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateFormModal, setShowCreateFormModal] = useState(false);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const { projectId, formId } = useParams();
  const toggleEditModal = (e) => setShowEditModal(!showEditModal);
  const toggleShareModal = (e) => setShowShareModal(!showShareModal);
  const toggleArchiveModal = (e) => setShowArchiveModal(!showArchiveModal);
  const toggleDeleteModal = (e) => setShowDeleteModal(!showDeleteModal);
  const addRecord = (e) => navigate(`/forms/${formId}`);

  useEffect(async () => {
    const project = await getProject(projectId);
    const form = await getForm(projectId, formId);

    setOwner(project.owner);
    setProjectActive(project.active);

    if (form) {
      setName(form.name);
      setDescription(form.description);
      setFields(form.fields);
      setActive(form.active);
      setShareTo(form.access);

      setAddedUsers(await getUsersByIds(form.restrictedTo));

      // setRecords(await getRecords(projectId, formId));
    } else {
      navigate('/404');
    }
  }, []);

  return (
    <>
      <div>
        <PageTitle>{name}</PageTitle>
        {name ? (
          <>
            {auth._id === owner ? (
              <>
                {active ? (
                  <PageButton
                    style="error"
                    label="Delete"
                    onClick={toggleDeleteModal}
                  />
                ) : null}
                {projectActive ? (
                  <PageButton
                    style="warning"
                    label={active ? 'Archive' : 'Unarchive'}
                    onClick={toggleArchiveModal}
                  />
                ) : null}
                {active ? (
                  <PageButton
                    style="info"
                    label="Share"
                    onClick={toggleShareModal}
                  />
                ) : null}
                {active ? (
                  <PageButton
                    style="success"
                    label="Record +"
                    onClick={addRecord}
                  />
                ) : null}
                {active ? (
                  <PageButton
                    style="primary"
                    label="Edit"
                    onClick={toggleEditModal}
                  />
                ) : null}
                <EditModal
                  type="form"
                  name={name}
                  description={description}
                  show={showEditModal}
                  onHide={toggleEditModal}
                  setName={setName}
                  setDescription={setDescription}
                />
                <ShareFormModal
                  projectId={projectId}
                  formId={formId}
                  show={showShareModal}
                  onHide={toggleShareModal}
                  shareTo={shareTo}
                  setShareTo={setShareTo}
                  addedUsers={addedUsers}
                  setAddedUsers={setAddedUsers}
                />
                <ArchiveModal
                  projectId={projectId}
                  formId={formId}
                  active={!active}
                  setActive={setActive}
                  show={showArchiveModal}
                  onHide={toggleArchiveModal}
                />
                <DeleteModal
                  projectId={projectId}
                  formId={formId}
                  show={showDeleteModal}
                  onHide={toggleDeleteModal}
                />
              </>
            ) : null}
          </>
        ) : null}
      </div>

      <CTA />

      {auth._id === owner && shareTo !== 'private' ? (
        <div className="mb-7">
          <ShareAlert
            helpText="Form URL -"
            value={window.location.href
              .split(`/projects/${projectId}`)
              .join('')}
          />
          <ShareAlert
            helpText="API Endpoint - POST, [GET, PUT, DELETE] -"
            value={`${
              import.meta.env.VITE_BACKEND_URI
            }/forms/${formId}/[form_id]`}
          />
        </div>
      ) : (
        <ShareHelpAlert />
      )}

      <EditForm active={active} fields={fields} />

      {/* {records.length ? <FormsTable records={records} /> : null} */}
    </>
  );
};

export default ManageForm;
