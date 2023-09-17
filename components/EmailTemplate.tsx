import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  funnel: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, lastName, email, phoneNumber, message, funnel
}) => (
  <div>
    <h3>{firstName} {lastName}</h3>
    <h5>{email}</h5>
    <h5>{phoneNumber}</h5>
    <h5>{funnel}</h5>
    <p> {message}</p>
  </div>
);
