import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const forTicketType: SchemaObject = {
  title: 'Custom Field Items',
  description: 'The custom field value when data is a list',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      clientId: {
        title: 'Client ID',
        description: 'Client Identification. Only required for custom fields of the type Customer search.',
        type: 'string',
      },
      personId: {
        title: 'Person ID',
        description: 'Agent or client identification. Only required for custom fields of the type People search.',
        type: 'string',
      },
      team: {
        title: 'Team',
        description: 'Name of the agent’s team. Only required for custom fields of the type Agent search.',
        type: 'string',
      },
      customFieldItem: {
        title: 'Custom Field Item',
        description: 'Name of the item selected on the custom field. Required for custom fields of the type Custom dropdown, Multiple selection, or Single selection.',
        type: 'string',
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default forTicketType;
