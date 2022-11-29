import { LightningElement, track } from 'lwc';

export default class Fsc_lookupDemo extends LightningElement {
    objectApiName;
    allowMultiselect = false;
    label = 'Search Records';
    whereClause = '';
    iconName;
    @track fieldsToSearch = '';
    @track fieldsToDisplay = '';

    handleObjectChange(event) {
        this.objectApiName = event.detail.value;
    }

    handleSearchFieldsChange(event) {
        console.log(JSON.stringify(event.detail.values.join()));
        this.fieldsToSearch = event.detail.values.join();
    }

    handleDisplayFieldsChange(event) {
        console.log(JSON.stringify(event.detail.values.join()));
        this.fieldsToDisplay = event.detail.values.join();
    }

    handleIconSelection(event) {
        console.log(JSON.stringify(event.detail));
        this.iconName = event.detail;
        console.log(this.iconName);
    }

    handleAllowMultiselectChange(event) {
        console.log('in handleAllowMultiselectChange');
        console.log(this.allowMultiselect);
        console.log(event.target.checked);
        this.allowMultiselect = event.target.checked;
    }

    handleLabelChange(event) {
        this.label = event.target.value;
    }

    handleWhereClauseChange(event) {
        this.whereClause = event.target.value;
    }
}