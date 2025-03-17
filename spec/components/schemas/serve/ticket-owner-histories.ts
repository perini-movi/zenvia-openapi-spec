
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket Owner History',
  type: 'object',
  readOnly: true,
  properties: {
    owner: {
      title: 'Owner',
      description: 'Agent that was previously assigned to ticket.',
      type: 'string',
    },
    ownerTeam: {
      title: 'Owner Team',
      description: 'Name of the agent’s team.',
      type: 'string',
    },
    permanencyTimeFullTime: {
      title: 'Permanency Full Time',
      description: 'Duration of the agent’s assignment in calendar hours. Returns the total time in seconds.',
      type: 'number',
    },
    permanencyTimeWorkingTime: {
      title: 'Permanency Working Time',
      description: 'Duration of the agent’s assignment in business hours. Returns the total time in seconds.',
      type: 'number',
    },
    updatedBy: {
      title: 'Updated by',
      description: 'User that re-assigned the ticket.',
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
