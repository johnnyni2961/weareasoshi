import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Auth } from '../../contexts/Auth';
import { getUsersByIds } from '../../hooks/useAuth';
import { getProject } from '../../hooks/useProject';
import { getForms } from '../../hooks/useForm';
import CTA from '../CTA/CTA';
import EditModal from '../Modals/EditModal';
import ArchiveModal from '../Modals/ArchiveModal';
import DeleteModal from '../Modals/DeleteModal';
import CloneModal from '../Modals/CloneModal';
import PageTitle from '../Typography/PageTitle';
import PageButton from '../Typography/PageButton';
import SectionTitle from '../Typography/SectionTitle';
import SectionButton from '../Typography/SectionButton';
import FormsTable from '../Tables/FormsTable';
import ShareAlert from '../Alerts/ShareAlert';

const ManageProject = () => {
  const [auth] = useContext(Auth);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [owner, setOwner] = useState('');
  const [active, setActive] = useState('');
  const [access, setAccess] = useState('');
  const [addedUsers, setAddedUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateFormModal, setShowCreateFormModal] = useState(false);
  const [showCloneModal, setShowCloneModal] = useState(false);
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();
  const { projectId } = useParams();
  const toggleEditModal = (e) => setShowEditModal(!showEditModal);
  const toggleArchiveModal = (e) => setShowArchiveModal(!showArchiveModal);
  const toggleDeleteModal = (e) => setShowDeleteModal(!showDeleteModal);
  const toggleCloneModal = (e) => setShowCloneModal(!showCloneModal);

  useEffect(async () => {
    const project = await getProject(projectId);

    if (project) {
      setName(project.name);
      setDescription(project.description);
      setActive(project.active);
      setOwner(project.owner);
      setAccess(project.access);

      setAddedUsers(await getUsersByIds(project.restrictedTo));
      setForms(await getForms(projectId));
    } else {
      navigate('/404');
    }
  }, [active]);

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
                <PageButton
                  style="warning"
                  label={active ? 'Archive' : 'Unarchive'}
                  onClick={toggleArchiveModal}
                />
                {active ? (
                  <PageButton
                    style="primary"
                    label="Edit"
                    onClick={toggleEditModal}
                  />
                ) : null}
                <EditModal
                  type="project"
                  name={name}
                  description={description}
                  access={access}
                  addedUsers={addedUsers}
                  show={showEditModal}
                  onHide={toggleEditModal}
                  setName={setName}
                  setDescription={setDescription}
                  setAccess={setAccess}
                  setAddedUsers={setAddedUsers}
                />
                <ArchiveModal
                  projectId={projectId}
                  active={!active}
                  setActive={setActive}
                  show={showArchiveModal}
                  onHide={toggleArchiveModal}
                />
                <DeleteModal
                  projectId={projectId}
                  show={showDeleteModal}
                  onHide={toggleDeleteModal}
                />
              </>
            ) : (
              <>
                {active ? (
                  <>
                    <PageButton
                      style="primary"
                      label="Clone"
                      onClick={toggleCloneModal}
                    />
                    <CloneModal
                      name={name}
                      description={description}
                      show={showCloneModal}
                      onHide={toggleCloneModal}
                      setName={setName}
                      setDescription={setDescription}
                      setAccess={setAccess}
                      setAddedUsers={setAddedUsers}
                    />
                  </>
                ) : null}
              </>
            )}
          </>
        ) : null}
      </div>

      <CTA />

      {auth._id === owner && access !== 'private' ? <ShareAlert /> : null}

      <div>
        <SectionTitle>Forms</SectionTitle>
        <SectionButton
          style="primary"
          label="Create form"
          link={true}
          to="forms/new"
        />
      </div>

      {forms.length ? <FormsTable forms={forms} /> : null}
    </>
  );
};

export default ManageProject;
