
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket Owner History',
  type: 'object',
  properties: {
    owner: {
      title: 'Owner',
      description: 'Agent that was previously assigned to ticket.',
      type: 'string',
      readOnly: true,
    },
    ownerTeam: {
      title: 'Owner Team',
      description: 'Name of the agent’s team.',
      type: 'string',
      readOnly: true,
    },
    permanencyTimeFullTime: {
      title: 'Permanency Full Time',
      description: 'Duration of the agent’s assignment in calendar hours. Returns the total time in seconds.',
      type: 'number',
      readOnly: true,
    },
    permanencyTimeWorkingTime: {
      title: 'Permanency Working Time',
      description: 'Duration of the agent’s assignment in business hours. Returns the total time in seconds.',
      type: 'number',
      readOnly: true,
    },
    updatedBy: {
      title: 'Updated by',
      description: 'User that re-assigned the ticket.',
      type: 'string',
      readOnly: true,
    },
    updatedAt: {
      description: 'Timestamp of the update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
