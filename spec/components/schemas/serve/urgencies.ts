import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Urgencies',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the urgency.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Name of the urgency.',
      type: 'string',
    },
    backgroundColor: {
      title: 'Background Color',
      description: 'Background color of the urgency.',
      type: 'string',
    },
    isActive: {
      title: 'Is Active',
      description: 'Defines if urgency is active.',
      type: 'boolean',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;