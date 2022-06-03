import { Component, createRef } from 'react';
import CTA from '../CTA/CTA';
import ValidateFormModal, { FormResponseModal } from '../Modals/FormModal';
import PageTitle from '../Typography/PageTitle';
import { createForm } from '../../hooks/useForm';

class FormBuilder extends Component {
  constructor(props) {
    super(props);

    this.formBuilder = createRef();

    this.state = {
      name: '',
      description: '',
      showCreateModal: true,
      showResponseModal: false,
      modalBody: '',
      formCreated: false,
    };

    this.formOptions = {
      controlOrder: [
        'header',
        'paragraph',
        'text',
        'number',
        'date',
        'textarea',
        'checkbox-group',
        'radio-group',
        'autocomplete',
        'select',
      ],
      disableFields: ['button', 'hidden', 'file'],
      onSave: async (e, formData) => {
        const { name, description } = this.state;
        const fields = JSON.parse(formData);

        await createForm(
          this.props.project,
          name,
          description,
          fields,
          this.setResult
        );

        this.toggleFormResponseModal();
      },
    };
  }

  componentDidUpdate() {
    if (
      !this.state.showCreateModal &&
      !this.state.showResponseModal &&
      !this.state.modalBody &&
      !this.state.formCreated
    ) {
      $(this.formBuilder.current).formBuilder(this.formOptions);
    }
  }

  onSuccess = (newName, newDescription) => {
    this.setState({
      name: newName,
      description: newDescription,
      showCreateModal: false,
    });
  };

  setResult = (formCreated, modalBody) =>
    this.setState({ formCreated, modalBody });
  toggleFormResponseModal = () =>
    this.setState({ showResponseModal: !this.state.showResponseModal });

  render() {
    return (
      <>
        <div>
          <PageTitle>Create form</PageTitle>
        </div>

        <CTA />

        <div id="form-builder" ref={this.formBuilder} />

        <ValidateFormModal
          show={this.state.showCreateModal}
          onSuccess={this.onSuccess}
        />
        <FormResponseModal
          title="Status"
          body={this.state.modalBody}
          show={this.state.showResponseModal}
          created={this.state.formCreated}
          onHide={this.toggleFormResponseModal}
        />
      </>
    );
  }
}

export default FormBuilder;
