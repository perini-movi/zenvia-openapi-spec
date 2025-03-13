import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket tags',
  description: 'Ticket tags information.',
  type: 'string',
};

export const ref = createComponentRef(__filename);
export default base;
