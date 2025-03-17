
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket Child',
  type: 'object',
  properties: {
    id: {
      title: 'Ticket ID',
      description: 'The ticket identification.',
      type: 'string',
      readOnly: true,
    },
    subject: {
      title: 'Subject',
      description: 'The ticket subject',
      type: 'string',
      readOnly: true,
    },
    isDeleted: {
      title: 'Is Deleted',
      type: 'boolean',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
