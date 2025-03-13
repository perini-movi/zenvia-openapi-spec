import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const profileType: SchemaObject = {
    type: 'string',
    enum: [
        'Users', 'Contacts', 'UsersAndContacts',
    ],
};

export const ref = createComponentRef(__filename);
export default profileType;


