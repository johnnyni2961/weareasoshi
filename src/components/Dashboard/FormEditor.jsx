import { Component, createRef } from 'react';
import CTA from '../CTA/CTA';
import { FormResponseModal } from '../Modals/FormModal';
import PageTitle from '../Typography/PageTitle';
import { updateForm } from '../../hooks/useForm';

class FormEditor extends Component {
  constructor(props) {
    super(props);

    this.formBuilder = createRef();

    this.state = {
      showResponseModal: false,
      formUpdated: false,
      modalBody: '',
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
        if (this.props.active) {
          const { name, description } = this.state;
          const fields = JSON.parse(formData);

          await updateForm(
            this.props.project,
            this.props.form,
            { fields },
            this.setResult
          );
        } else {
          this.setResult(false, 'You cannot edit archived forms.');
        }

        this.toggleFormResponseModal();
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (
      !this.state.showResponseModal &&
      !this.state.modalBody &&
      this.props.fields.length &&
      prevProps.fields !== this.props.fields
    ) {
      this.formOptions.formData = this.props.fields;

      $(this.formBuilder.current).formBuilder(this.formOptions);
    }
  }

  onSuccess = (newName, newDescription) => {
    this.setState({ name: newName, description: newDescription });
  };

  setResult = (formUpdated, modalBody) =>
    this.setState({ formUpdated, modalBody });
  toggleFormResponseModal = () =>
    this.setState({ showResponseModal: !this.state.showResponseModal });

  render() {
    return (
      <>
        <div id="form-builder" ref={this.formBuilder} />

        <FormResponseModal
          title="Status"
          body={this.state.modalBody}
          show={this.state.showResponseModal}
          created={this.state.formUpdated}
          onHide={this.toggleFormResponseModal}
        />
      </>
    );
  }
}

export default FormEditor;
