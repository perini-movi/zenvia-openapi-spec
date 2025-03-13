import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as forTicketTypeRef } from './context/access-level-ticket-type';

const base: SchemaObject = {
  title: 'Categories',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the category.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Name of the category.',
      type: 'string',
    },
    isActive: {
      title: 'Is Active',
      description: 'Defines if category is active.',
      type: 'boolean',
    },
    forTicketType: {
      $ref: forTicketTypeRef,
    },
    allowsAllUrgencies: {
      title: 'Allow All Urgencies',
      type: 'boolean',
    },
    urgencies: {
      title: 'Urgencies',
      description: 'Defines a list of categories that are allowed with the category',
      type: 'array',
      items: {
        type: 'integer',
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;