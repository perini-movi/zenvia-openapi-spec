import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as customFieldTypeRef } from './context/custom-field-type';
import { ref as originRef } from './context/origin';

const base: SchemaObject = {
  title: 'Ticket Custom Fields',
  description: 'Ticket custom fields information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the custom field.',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Custom field name.',
      type: 'string',
    },
    type: {
      $ref: customFieldTypeRef,
    },
    expression: {
      title: 'Regular Expression',
      description: '',
      type: 'string',
    },
    origin: {
      $ref: originRef,
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
    createdBy: {
      title: 'Created By',
      description: 'Created by identifier',
      type: 'string',
      example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
