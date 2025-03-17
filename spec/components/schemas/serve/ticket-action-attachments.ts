import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket Action Attachment',
  type: 'object',
  properties: {
    name: {
      title: 'Name',
      description: 'The filename.',
      type: 'string',
    },
    hash: {
      title: 'Hash',
      description: 'Hash needed to retrieve the file',
      type: 'string',
    },
    mimeType: {
      title: 'Mime Type',
      description: 'The file mime type.',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;