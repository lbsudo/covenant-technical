import * as React from 'react';

interface EmailTemplateProps {
  firstNameLastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  websiteUrl: string;
  message: string;
  funnel: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstNameLastName, email, phoneNumber, companyName, websiteUrl, message, funnel
}) => (
  <div>
    <h3>Name: {firstNameLastName} </h3>
    <h5>Company: {companyName}</h5>
    <h5>Email: {email}</h5>
    <h5>Phone: {phoneNumber}</h5>
    <h5>Website: {websiteUrl}</h5>
    <h5>Heard From:{funnel}</h5>
    <p>Message: {message}</p>
  </div>
);
