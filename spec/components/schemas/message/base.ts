// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Message Object',
  description: 'This is a Message object model.',
  type: 'object',
  properties: {
    id: {
      title: 'Message ID',
      description: 'An ID for this message. This can be used for future message consulting or callback notifications.',
      type: 'string',
      readOnly: true,
    },
    from: {
      title: 'Sender ID',
      description: `This is the identifier of sender of this message. The sender is created when an integration for the channel is connected
        on the [integrations console](https://app.zenvia.com/home/credentials).
        <br>More details on the channel\'s *sender and recipient* section.`,
      type: 'string',
      maxLength: 64,
    },
    to: {
      title: 'Recipient ID',
      description: `The identifier of the contact (varies according to the channel) who will receive the message.
        <br>More details on the channel\'s *sender and recipient* section.`,
      type: 'string',
      maxLength: 64,
    },
    direction: {
      title: 'Message direction',
      description: 'Indicates if the message is incoming (IN) or outgoing (OUT)',
      type: 'string',
      enum: [
        'IN',
        'OUT',
      ],
      readOnly: true,
    },
    channel: {
      title: 'Message channel',
      description: 'Message channel',
      type: 'string',
      readOnly: true,
    },
    contents: {
      title: 'Message Contents',
      description: 'A list of content to be sent',
      type: 'array',
      items: {
        type: 'object',
      },
      minItems: 1,
    },
    timestamp: {
      title: 'Message timestamp',
      description: 'Timestamp of the message. Usually received from the provider of the channel.',
      type: 'string',
      format: 'date-time',
      readOnly: true,
    },
  },
  required: [
    'from',
    'to',
    'contents',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
