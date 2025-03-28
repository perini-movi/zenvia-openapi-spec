import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ticketTypeRef } from './context/ticket-type';
import { ref as justificationRef } from './context/justification';
import { ref as statusRef } from './context/status';
import { ref as originRef } from './context/origin-type';

const base: SchemaObject = {
  title: 'Ticket Actions',
  description: 'Ticket actions information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the ticket action.',
      type: 'integer',
      readOnly: true,
    },
    type: {
      $ref: ticketTypeRef,
    },
    justification: {
      $ref: justificationRef,
    },
    status: {
      $ref: statusRef,
    },
    origin: {
      $ref: originRef,
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
