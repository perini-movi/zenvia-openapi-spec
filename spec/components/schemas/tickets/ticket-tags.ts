import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket tags',
  description: 'Ticket tags information.',
  type: 'array',
  items: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default base;
