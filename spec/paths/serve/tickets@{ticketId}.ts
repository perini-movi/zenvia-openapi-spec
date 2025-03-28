import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketDataFieldRef } from '../../components/schemas/serve/tickets';
import { ref as ticketIdRef } from '../../components/parameters/serve/ticketId';

const get: OperationObject = {
  summary: 'Retrieve ticket by id',
  description: 'Retrieve all ticket information by id.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  parameters: [],
  responses: {
    200: {
      description: 'Ticket object',
      content: {
        'application/json': {
          schema: {
            $ref: ticketDataFieldRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const patch: OperationObject = {
  summary: 'Update ticket by id',
  description: 'Update ticket information by id.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  parameters: [],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: ticketDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket object',
      content: {
        'application/json': {
          schema: {
            $ref: ticketDataFieldRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  get,
  patch,
  parameters: [{
    $ref: ticketIdRef,
  }],
};

export default path;
