import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ticketTypeRef } from './context/ticket-type';
import { ref as justificationRef } from './context/justification';
import { ref as statusRef } from './context/status';
import { ref as urgencyRef } from './context/urgency';
import { ref as categoryRef } from './context/category';
import { ref as ownerTeamRef } from './context/owner-team';
import { ref as serviceRef } from './context/service';
import { ref as originTypeRef } from './context/origin-type';
import { ref as customFieldValuesRef } from './context/custom-field-values';

const base: SchemaObject = {
  title: 'Tickets',
  description: 'Ticket information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the ticket.',
      type: 'integer',
      readOnly: true,
      nullable: false,
    },
    protocol: {
      title: 'Protocol',
      type: 'string',
      description: 'Protocol identifier that clients can use to track the ticket',
      readOnly: true,
      nullable: false,
    },
    type: {
      $ref: ticketTypeRef,
    },
    origin: {
      $ref: originTypeRef,
    },
    subject: {
      title: 'Subject',
      description: 'Subject of the ticket.',
      type: 'string',
      nullable: false,
    },
    firstAction: {
      title: 'First Ticket Action',
      type: 'object',
      writeOnly: true,
      nullable: false,
      properties: {
        type: {
          $ref: ticketTypeRef,
        },
        description: {
          title: 'Ticket Description',
          type: 'string',
        },
        createdById: {
          title: 'Created By Id',
          type: 'string',
          example: 'a1b23f0d-2252-4ec4-bb88-b678bbe1542f',
        },
        createdAt: {
          title: 'Created At',
          type: 'string',
          example: '2022-05-23T19:37:59.000Z',
        },
      },
    },
    cc: {
      title: 'Cc',
      description: 'Emails in cc of the ticket',
      type: 'array',
      nullable: true,
      items: {
        type: 'string',
        example: 'cc1@zenvia.com',
      },
    },
    clients: {
      title: 'Clients',
      description: 'Clients of the ticket',
      type: 'array',
      nullable: false,
      items: {
        type: 'string',
        example: 'a4a4bc53-8396-4190-92e3-7edb6826e3dc',
      },
    },
    ownerId: {
      title: 'Owner Id',
      description: 'Owner identification if ticket owner is an agent',
      type: 'string',
      example: '5404ed19-2994-4831-bb33-627e27b18ab1',
      nullable: true,
    },
    ownerTeamId: {
      title: 'Owner Team Id',
      description: 'Owner team identification if ticket owner is a team',
      type: 'integer',
      nullable: true,
      writeOnly: true,
    },
    ownerTeam: {
      $ref: ownerTeamRef,
    },
    categoryId: {
      title: 'Category ID',
      description: 'Category identification',
      type: 'integer',
      writeOnly: true,
      nullable: true,
    },
    category: {
      $ref: categoryRef,
    },
    urgencyId: {
      title: 'Urgency ID',
      description: 'Urgency identification',
      type: 'integer',
      writeOnly: true,
      nullable: true,
    },
    urgency: {
      $ref: urgencyRef,
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
    serviceId: {
      title: 'Service ID',
      description: 'Service identification',
      type: 'integer',
      writeOnly: true,
      nullable: true,
    },
    service: {
      $ref: serviceRef,
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
    resolvedAt: {
      title: 'Resolved At',
      description: 'Resolved ticket timestamp',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    reopenedAt: {
      title: 'Reopened At',
      description: 'Reopened ticket timestamp',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    closedAt: {
      title: 'Closed At',
      description: 'Closed ticket timestamp',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the ticket creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    createdById: {
      title: 'Created By Id',
      description: 'Created by identifier',
      type: 'string',
      example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
    },
    updatedAt: {
      title: 'Updated At',
      description: 'Timestamp of the ticket update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
    solutionTime: {
      title: 'Solution Time',
      description: 'SLA resolution time.',
      type: 'integer',
      readOnly: true,
      nullable: true,
    },
    responseTime: {
      title: 'Response Time',
      description: 'SLA first-response time.',
      type: 'integer',
      readOnly: true,
      nullable: true,
    },
    solutionAt: {
      title: 'Solution At',
      description: 'Ticket resolution due date. If the resolution due date is updated via the API, it will be considered as having been set manually by the agent who added the last ticket note',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      nullable: true,
    },
    responseAt: {
      title: 'Response At',
      description: 'Ticket first-response due date.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
      nullable: true,
    },
    realResponseAt: {
      title: 'Real Response At',
      description: 'Actual first-response date.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
      nullable: true,
    },
    solutionDateIsPaused: {
      title: 'Solution Date Is Paused',
      type: 'boolean',
      readOnly: true,
      nullable: true,
    },
    solutionChangedByUser: {
      title: 'Solution Changed By User',
      description: 'Returns true if the current ticket resolution due date was set manually, and false if it was calculated by the system',
      type: 'boolean',
      readOnly: true,
    },
    solutionChangedById: {
      title: 'Solution Changed By User Id',
      description: 'The last user that changed the solution',
      type: 'string',
      readOnly: true,
      nullable: true,
      example: '5404ed19-2994-4831-bb33-627e27b18ab1',
    },
    agreement: {
      title: 'Agreement',
      description: 'SLA policy applied to the ticket',
      readOnly: true,
      nullable: true,
      type: 'object',
      properties: {
        id: {
          title: 'Agreement Id',
          description: 'Identifier of the SLA policy ',
          type: 'integer',
          readOnly: true,
        },
        name: {
          title: 'Agreement',
          description: 'Name of the SLA policy',
          type: 'string',
          readOnly: true,
        },
        rule: {
          title: 'Agreement Rule',
          description: 'SLA rule applied to the ticket',
          type: 'object',
          properties: {
            id: {
              description: 'Identifier of the SLA rule.',
              type: 'integer',
              readOnly: true,
            },
            name: {
              description: 'Name of the SLA rule.',
              type: 'string',
              readOnly: true,
            },
          },
        },
      },
    },
    customFields: {
      title: 'Custom Fields Values',
      type: 'array',
      nullable: true,
      writeOnly: true,
      items: {
        $ref: customFieldValuesRef,
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
