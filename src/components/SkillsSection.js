import React from 'react';
import uniqid from 'uniqid';

import InputContainer from './InputContainer';
import FormList from './FormList';

import { getForms, setForms } from '../utils/localStorage';
import {
    handleChange,
    showList,
    hideList,
    addForm,
    deleteForm,
    changeForm
} from '../utils/callbacks';

class SkillsSection extends React.Component {
    constructor(props) {
        super(props);

        this.storageKey = 'Skills';
        const { defaultForm } = this.props;
        const stateStore = getForms(this.storageKey);

        // if this is the first time the form is rendered, render the default form
        if (!stateStore) {
            let form = Object.assign({}, defaultForm, { id: uniqid() });

            this.state = {
                forms: [form],
                form: form,
                formListState: 'inactive'
            };

            setForms(this.storageKey, this.state);
        } else {
            this.state = stateStore;
        }

        // bind event handlers
        this.handleChange = handleChange.bind(this);
        this.showList = showList.bind(this);
        this.hideList = hideList.bind(this);
        this.addForm = addForm.bind(this);
        this.changeForm = changeForm.bind(this);
        this.deleteForm = deleteForm.bind(this);
    }

    render() {
        const { form, forms, formListState } = this.state;

        return (
            <div id={'skills-section'} className={'card-section'}>
                <form>
                    <InputContainer
                        inputFor={'title'}
                        value={form['title']}
                        handleChange={this.handleChange}
                    />
                    <InputContainer
                        inputFor={'description'}
                        value={form['description']}
                        handleChange={this.handleChange}
                    />
                </form>
                <FormList
                    form={form}
                    forms={forms}
                    formListState={formListState}
                    addForm={this.addForm}
                    deleteForm={this.deleteForm}
                    changeForm={this.changeForm}
                    showList={this.showList}
                    hideList={this.hideList}
                    formPropertyMain={'title'}
                    formPropertySecondary={'description'}
                    addPrompt={'skill'}
                />
            </div>
        );
    }
}

export default SkillsSection;
