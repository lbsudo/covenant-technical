import React from "react";
import PreviewSkeleton from "./PreviewSkeleton";
import { Post } from "@/app/lib/interface";

interface InsightPostProps {
  data: Post[];
}


export default function InsightPost({ data }: InsightPostProps) {
  // const data = (await getData()) as Post[];
  return (
    <div>
      <section className="w-full">
        <PreviewSkeleton list={data} />
      </section>
    </div>
  );
};
