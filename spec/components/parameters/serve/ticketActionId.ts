import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const actionId: ParameterObject = {
  name: 'actionId',
  in: 'path',
  required: true,
  description: 'The ticket action identifier',
  schema: {
    type: 'integer',
  },
};

export const ref = createComponentRef(__filename);
export default actionId;
