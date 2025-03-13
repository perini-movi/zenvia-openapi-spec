import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Tags',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the tag.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Name of the tag.',
      type: 'string',
    },
    slug: {
      title: 'Slug',
      description: 'Slug of the tag.',
      type: 'string',
    },
    isActive: {
      title: 'Is Active',
      description: 'Defines if tag is active.',
      type: 'boolean',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;