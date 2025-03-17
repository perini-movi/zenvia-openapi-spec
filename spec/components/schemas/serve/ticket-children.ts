
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket Child',
  type: 'object',
  readOnly: true,
  properties: {
    id: {
      title: 'Ticket ID',
      description: 'The ticket identification.',
      type: 'string',
    },
    subject: {
      title: 'Subject',
      description: 'The ticket subject',
      type: 'string',
    },
    isDeleted: {
      title: 'Is Deleted',
      type: 'boolean',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
