import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as forTicketTypeRef } from './context/access-level-ticket-type';
import { ref as systemStatusRef } from './context/system-status';

const base: SchemaObject = {
  title: 'Statuses',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the status.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Name',
      description: 'Name of the status.',
      type: 'string',
    },
    isActive: {
      title: 'Is Active',
      description: 'Defines if status is active.',
      type: 'boolean',
    },
    forTicketType: {
      $ref: forTicketTypeRef,
    },
    systemStatus: {
      $ref: systemStatusRef,
    },
    isRequiredJustification: {
      title: 'Justification Required ',
      description: 'Defines if a justification is required for the status.',
      type: 'boolean',
    },
    backgroundColor: {
      title: 'Background Color',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;