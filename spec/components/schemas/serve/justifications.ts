import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as forTicketTypeRef } from './context/access-level-ticket-type';

const base: SchemaObject = {
  title: 'Justifications',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the justification.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Name of the justification.',
      type: 'string',
    },
    isActive: {
      title: 'Is Active',
      description: 'Defines if justification is active.',
      type: 'boolean',
    },
    forTicketType: {
      $ref: forTicketTypeRef,
    },
    statuses: {
      title: 'Statuses',
      description: 'Defines a list of status that are allowed with the justification',
      type: 'array',
      items: {
        type: 'integer',
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;