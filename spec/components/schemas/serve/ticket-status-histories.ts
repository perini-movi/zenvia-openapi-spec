import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket Status History',
  type: 'object',
  readOnly: true,
  properties: {
    status: {
      title: 'Status',
      description: 'Name of the ticket status.',
      type: 'string',
    },
    justification: {
      title: 'Justification',
      description: 'Ticket status Reason.',
      type: 'string',
    },
    permanencyTimeFullTime: {
      title: 'Permanency Full Time',
      description: 'Duration of the status in calendar hours. Returns the total time in seconds.',
      type: 'number',
    },
    permanencyTimeWorkingTime: {
      title: 'Permanency Working Time',
      description: 'Duration of the status in business hours. Returns the total time in seconds.',
      type: 'number',
    },
    updatedBy: {
      title: 'Updated by',
      description: 'User that changed the ticket status.',
      type: 'string',
    },
    updatedAt: {
      description: 'Timestamp of the update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
