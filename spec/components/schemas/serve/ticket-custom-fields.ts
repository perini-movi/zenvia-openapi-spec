import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as customFieldItemsRef } from './context/custom-field-items';

const base: SchemaObject = {
  title: 'Ticket Custom Fields',
  description: 'Ticket custom fields information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the custom field value.',
      type: 'string',
      readOnly: true,
    },
    customFieldId: {
      title: 'Custom Field ID',
      description: 'The custom field identification.',
      type: 'integer',
    },
    customFieldRuleId: {
      title: 'Custom Field Rule ID',
      description: 'The custom field rule identification.',
      type: 'integer',
    },
    value: {
      title: 'Custom Field Value',
      description: 'The custom field value when data is a string. Value in the custom field. Only required for the following custom field types: Single-line text, Multiline text, Rich text, Regular expression, Numeric, Date, Time, Date and time, Email, Phone number, URL.',
      type: 'string',
    },
    items: {
      $ref: customFieldItemsRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
