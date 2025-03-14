import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as pageRef } from '../../components/parameters/page';
import { ref as sizeRef } from '../../components/parameters/size';
import { ref as teamIdRef } from '../../components/parameters/serve/teamId';

const get: OperationObject = {
  summary: 'Retrieve users linked to team',
  description: 'Retrieve all users linked to team.',
  tags: ['Teams'],
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
      description: 'User identifiers',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'string',
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
    $ref: teamIdRef,
  }],
};

export default path;
