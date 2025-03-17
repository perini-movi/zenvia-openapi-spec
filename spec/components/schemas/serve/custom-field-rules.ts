import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket Custom Field Rules',
  description: 'Ticket custom field rules information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the custom field rule.',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Custom field rule name.',
      type: 'string',
    },
    order: {
      title: 'Order',
      description: 'Screen Order',
      type: 'integer',
    },
    isActive: {
      title: 'Is Active',
      type: 'boolean',
    },
    updatedBy: {
      title: 'Updated by',
      description: 'User that changed the rule.',
      type: 'string',
    },
    updatedAt: {
      title: 'Update timestamp',
      description: 'Timestamp of the update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the ticket creation.',
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
