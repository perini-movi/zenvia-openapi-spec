import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ticketTypeRef } from './context/ticket-type';
import { ref as originRef } from './context/origin';
import { ref as systemStatusRef } from './context/system-status';

const base: SchemaObject = {
  title: 'Ticket',
  description: 'Ticket information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the ticket.',
      type: 'string',
      readOnly: true,
    },
    type: {
      $ref: ticketTypeRef,
    },
    subject: {
      title: 'Subject',
      description: 'Subject of the ticket.',
      type: 'string',
    },
    description: {
      title: 'Description',
      description: 'Description of the ticket.',
      type: 'string',
    },
    urgencyId: {
      title: 'Urgency Id',
      description: 'Urgency of the ticket',
      type: 'integer',
    },
    urgency: {
      title: 'Urgency',
      type: 'object',
      properties: {
        id: {
          title: 'Urgency Id',
          description: 'Urgency of the ticket',
          type: 'integer',
        },
        name: {
          title: 'Urgency Name',
          description: 'Urgency name of the ticket',
          type: 'string',
        },
      },
    },
    categoryId: {
      title: 'Category Id',
      description: 'Category of the ticket',
      type: 'integer',
    },
    category: {
      title: 'Category',
      type: 'object',
      properties: {
        id: {
          title: 'Category Id',
          description: 'Category of the ticket',
          type: 'integer',
        },
        name: {
          title: 'Category Name',
          description: 'Category name of the ticket',
          type: 'string',
        },
      },
    },
    statusId: {
      title: 'Status Id',
      description: 'Status of the ticket',
      type: 'integer',
    },
    status: {
      title: 'Status',
      type: 'object',
      properties: {
        id: {
          title: 'Status Id',
          description: 'Status of the ticket',
          type: 'integer',
        },
        name: {
          title: 'Status Name',
          description: 'Status name of the ticket',
          type: 'string',
        },
        systemStatus: {
          $ref: systemStatusRef,
        },
      },
    },
    justificationId: {
      title: 'Justification Id',
      description: 'Justification linked with the last status of the ticket',
      type: 'integer',
    },
    justification: {
      title: 'Justification',
      type: 'object',
      properties: {
        id: {
          title: 'Justification Id',
          description: 'Justification of the ticket',
          type: 'integer',
        },
        name: {
          title: 'Justification Name',
          description: 'Justification name of the ticket',
          type: 'string',
        },
      },
    },
    origin: {
      $ref: originRef,
    },
    cc: {
      title: 'Cc',
      description: 'Emails in cc of the ticket',
      type: 'array',
      items: {
        type: 'string',
        example: 'cc1@zenvia.com',
      },
    },
    ownerId: {
      title: 'Owner Id',
      description: 'Owner identification if ticket owner is an agent',
      type: 'string',
      example: '5404ed19-2994-4831-bb33-627e27b18ab1',
    },
    owner: {
      title: 'Owner',
      type: 'object',
      properties: {
        id: {
          title: 'Owner Id',
          description: 'Owner of the ticket',
          type: 'integer',
        },
        name: {
          title: 'Owner Name',
          description: 'Owner name of the ticket',
          type: 'string',
        },
      },
    },
    ownerTeamId: {
      title: 'Owner Team Id',
      description: 'Team Id if ticket owner is a team',
      type: 'integer',
      example: 'Agents',
    },
    ownerTeam: {
      title: 'Owner Team',
      type: 'object',
      properties: {
        id: {
          title: 'Owner Team Id',
          description: 'Owner Team of the ticket',
          type: 'integer',
        },
        name: {
          title: 'Owner Team Name',
          description: 'Owner Team name of the ticket',
          type: 'string',
        },
      },
    },
    clients: {
      title: 'Clients',
      description: 'Clients of the ticket',
      type: 'array',
      items: {
        type: 'string',
        example: 'a4a4bc53-8396-4190-92e3-7edb6826e3dc',
      },
    },
    serviceId: {
      title: 'Service Id',
      description: 'Service Id of the ticket',
      type: 'integer',
    },
    services: {
      title: 'Services',
      description: 'Services tree of the service linked in ticket',
      type: 'array',
      readOnly: true,
      items: {
        type: 'object',
        properties: {
          id: {
            title: 'Id',
            type: 'integer',
          },
          name: {
            title: 'Name',
            type: 'string',
          },
          level: {
            title: 'Level',
            type: 'integer',
          },
        },
      },
    },
    resolvedAt: {
      title: 'Resolved At',
      description: 'Resolved ticket timestamp',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
    },
    reopenedAt: {
      title: 'Reopened At',
      description: 'Reopened ticket timestamp',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
    },
    closedAt: {
      title: 'Closed At',
      description: 'Closed ticket timestamp',
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
    updatedAt: {
      title: 'Updated At',
      description: 'Timestamp of the ticket update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
    sla: {
      title: 'SLA',
      description: 'Ticket SLA',
      type: 'object',
      properties: {
        agreement: {
          title: 'Agreement',
          description: 'Name of the SLA policy applied to the ticket',
          type: 'string',
          readOnly: true,
        },
        agreementRule: {
          title: 'Agreement Rule',
          description: 'Name of the specific SLA rule applied to the ticket.',
          type: 'string',
          readOnly: true,
        },
        solutionTime: {
          title: 'Solution Time',
          description: 'SLA resolution time.',
          type: 'integer',
          readOnly: true,
        },
        responseTime: {
          title: 'Response Time',
          description: 'SLA first-response time.',
          type: 'integer',
          readOnly: true,
        },
        solutionAt: {
          title: 'Solution At',
          description: 'Ticket resolution due date. If the resolution due date is updated via the API, it will be considered as having been set manually by the agent who added the last ticket note',
          type: 'string',
          example: '2022-05-23T19:37:59.000Z',
        },
        responseAt: {
          title: 'Response At',
          description: 'Ticket first-response due date.',
          type: 'string',
          example: '2022-05-23T19:37:59.000Z',
          readOnly: true,
        },
        realResponseAt: {
          title: 'Real Response At',
          description: 'Actual first-response date.',
          type: 'string',
          example: '2022-05-23T19:37:59.000Z',
          readOnly: true,
        },
        solutionDateIsPaused: {
          title: 'Solution Date is Paused',
          description: 'Returns true if the SLA time for ticket resolution is paused, and false if it is not paused.',
          type: 'boolean',
          readOnly: true,
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
