import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const origin: SchemaObject = {
  title: 'Origin',
  description: 'The event origin',
  type: 'string',
  enum: [
    'FirstAction',
    'WebClient',
    'WebAgent',
    // Email, 'EmailSent'
    'Email',
    'SystemTrigger',
    'WebApi',

    // Tratar todos os abaixo como 'Chat'?
    // 'WhatsApp',
    // 'FacebookMessenger',
    // 'WebChatOnline',
    // 'WebChatOffline',
    // 'ZenviaChat',
    // 'ChatZccServe',
    // 'ChatZccServeSimulator',
    // 'ZaasWhatsApp',
    // 'NLU',
    // 'ActiveWhatsapp',
    // 'WhatsappNLU',
    // 'ActiveWhatsappNLU',

    // Tratar como 'Other'?
    // 'ContactForm',
    // 'AutomaticSchedule',
    // 'JiraIssue',
    // 'RedmineIssue',
    // 'ReceivedCall',
    // 'MadeCall',
    // 'LostCall',
    // 'DropoutCall',
    // 'RemoteAccess',
    // 'MovideskIntegration',
    // 'NotAnsweredCall',
  ],
  readOnly: true,
};

export const ref = createComponentRef(__filename);
export default origin;
