import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const forTicketType: SchemaObject = {
    title: 'For Ticket Type',
    description: 'Ticket type that can select the resource',
    type: 'string',
    enum: [
        'PublicTicket', 'InternalTicket', 'PublicAndInternalTicket', 'CanNotOpenTicket',
    ],
};

export const ref = createComponentRef(__filename);
export default forTicketType;
