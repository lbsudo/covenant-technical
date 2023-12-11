import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

type Props = {
  title: string;
  price: string;
  time?: string;
  addy?: string;
  className?: string;
}

export default function PlanCard({ title, price, time, addy, className }: Props) {
  return (
    <Card className={className}>
      <CardHeader className="flex text-center justify-center items-center gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-md md:text-4xl font-semibold">{title}</p>
          <p className="text-md md:text-4xl font-light">{time}</p>
          <p className="text-md md:text-4xl font-semibold">{price}</p>
          <p className="text-md md:text-lg font-light">Additional hours: {addy}/hour</p>
        </div>
      </CardHeader>
      {/* <Divider /> */}
      <CardBody className="text-center">
        {/* <p>{message}</p> */}
      </CardBody>
    </Card>
  );
}
