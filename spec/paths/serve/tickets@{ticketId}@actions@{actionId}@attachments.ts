import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketActionAttachmentDataFieldRef } from '../../components/schemas/serve/ticket-action-attachments';
import { ref as pageRef } from '../../components/parameters/page';
import { ref as sizeRef } from '../../components/parameters/size';
import { ref as ticketIdRef } from '../../components/parameters/serve/ticketId';
import { ref as ticketActionIdRef } from '../../components/parameters/serve/ticketActionId';

const get: OperationObject = {
  summary: 'List ticket action attachments',
  description: 'Lists all ticket actions attachments available.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  parameters: [{
    $ref: pageRef,
  }, {
    $ref: sizeRef,
  }],
  responses: {
    200: {
      description: 'Ticket actions attachments available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: ticketActionAttachmentDataFieldRef,
            },
          },
        },
      },
      headers: {
        'x-total': {
          schema: {
            description: 'The total number of results available.',
            type: 'string',
            example: '100',
          },
        },
        'x-page-size': {
          schema: {
            description: 'The number of results per page.',
            type: 'string',
            example: '10',
          },
        },
        'x-page': {
          schema: {
            description: 'The current page.',
            type: 'string',
            example: '5',
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
  parameters: [{
    $ref: ticketIdRef,
  }, {
    $ref: ticketActionIdRef,
  }],
};

export default path;
