import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Teams',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the team.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Name of the team.',
      type: 'string',
    },
    isActive: {
      title: 'Is Active',
      description: 'Defines if team is active.',
      type: 'boolean',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;