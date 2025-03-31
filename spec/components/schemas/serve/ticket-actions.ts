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
    origin: {
      $ref: originRef,
    },
    description: {
      title: 'Description',
      type: 'string',
    },
    statusId: {
      title: 'Status ID',
      description: 'Status identification',
      type: 'integer',
      writeOnly: true,
    },
    status: {
      $ref: statusRef,
    },
    justificationId: {
      title: 'Justification ID',
      description: 'Justification identification',
      type: 'integer',
      writeOnly: true,
      nullable: true,
    },
    justification: {
      $ref: justificationRef,
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the ticket creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    createdById: {
      title: 'Created By ID',
      description: 'Created by identifier',
      type: 'string',
      example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
