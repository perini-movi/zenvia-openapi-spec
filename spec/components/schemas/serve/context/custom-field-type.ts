import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const customFieldType: SchemaObject = {
    title: 'Custom Field Type',
    description: 'System status linked with the status of the ticket',
    type: 'string',
    enum: [
      'TextBox',
      'TextArea',
      'TextEditor',
      'RegularExpression',
      'ListOfValues',
      'ListOfPeople',
      'ListOfClients',
      'ListOfAgents',
      'CheckBox',
      'RadioButton',
      'Numeric',
      'Date',
      'Hour',
      'DateTime',
      'Email',
      'PhoneNumber',
      'URL',
      'File',
    ],
};

export const ref = createComponentRef(__filename);
export default customFieldType;


