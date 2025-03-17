import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const ticketActionId: ParameterObject = {
  name: 'ticketActionId',
  in: 'path',
  required: true,
  description: 'The ticket action identifier',
  schema: {
    type: 'integer',
  },
};

export const ref = createComponentRef(__filename);
export default ticketActionId;
