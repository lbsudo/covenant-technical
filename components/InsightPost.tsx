import React from "react";
import getPostMetadata from "@/utils/getPostMetadata";
import PreviewSkeleton from "./PreviewSkeleton";
import { PostMetadata } from "@/types";

export default function InsightPost() {
  const postMetadata: PostMetadata[] = getPostMetadata();

  return (
    <div>
      <section className="w-full">
        <PreviewSkeleton list={postMetadata} />
      </section>
    </div>
  );
}
;
