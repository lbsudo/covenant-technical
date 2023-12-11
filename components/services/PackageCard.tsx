import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

type Props = {
  title: string;
  price: string;
  message: string;
  className: string;
}

export default function PackageCard({ title, price, message, className }: Props) {
  return (
    <Card className={className}>
      <CardHeader className="flex text-center justify-center items-center gap-3">
        <div className="flex flex-col">
          <p className="text-md md:text-4xl">{title}</p>
          <p className="text-md md:text-4xl">{price}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="text-center">
        <p>{message}</p>
        <p>Free .com/.net/.org domain registration</p>
        <p>Free SSL/TLS</p>
        <p>One hour of WordPress training</p>
      </CardBody>
    </Card>
  );
}
