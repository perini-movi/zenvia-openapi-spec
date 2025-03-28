import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      title: 'Id',
      description: 'Custom field identifier',
      type: 'integer',
    },
    value: {
      title: 'Value',
        description: 'Custom field value. \nReturns number when custom field type is Numeric. \nReturns string when custom field type is TextBox, TextArea, TextEditor, RegularExpression, Date, Hour, DateTime, Email, PhoneNumber, URL. \nReturns array of string when custom field type is ListOfValues, ListOfPeople, ListOfClients, ListOfAgents, CheckBox, RadioButton\n Returns array of file object when custom field type is File',
        oneOf: [
          {
            type: 'number',
          },
          {
            type: 'string',
          }, {
            type: 'array',
            items: {
              type: 'string'
            },
          }, {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                filename: {
                  title: 'Filename',
                  type: 'string',
                },
                mimeType: {
                  title: 'MimeType',
                  type: 'string',
                },
                hash: {
                  title: 'File hash',
                  type: 'string',
                },
              },
            },
          },
        ],
    },
  },
};

  export const ref = createComponentRef(__filename);
  export default base;


