import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Tags',
  description: 'Tag slugs.',
  type: 'string',
};

export const ref = createComponentRef(__filename);
export default base;
