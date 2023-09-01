import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  category: string;
  cover: string;
  slug: string;
}
