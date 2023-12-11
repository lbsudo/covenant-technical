import React from "react";
import { Card, CardHeader, CardBody, Divider, Link } from "@nextui-org/react";
import { IconType } from "react-icons";
import { Button } from '@nextui-org/react';
import { baseButton } from '../primitives';

type Props = {
  title: string;
  message: string;
  Icon?: IconType;
  className: string;
  link?: string
}

export default function ServiceCard({ title, message, Icon, link, className }: Props) {
  return (
    <Card className={className}>
      <CardHeader className="flex gap-3">
        {Icon && <Icon size={40} />}
        <div className="flex flex-col">
          <p className="text-md md:text-4xl">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex items-center justify-center">
        <p className="text-md pb-4">{message}</p>
        {link && (
          <Link href={link}>
            <Button
              color="secondary"
              className={baseButton({ color: 'primary' })}
              variant="ghost"
            >
              Contact Us
            </Button>
          </Link>
        )}
      </CardBody>
    </Card>
  );
}
