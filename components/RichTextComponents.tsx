import Image from "next/image"
import Link from "next/link"
import urlFor from "@/app/lib/urlFor"
import { PortableTextComponents } from "@portabletext/react"

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => <h1 className="text-6xl py-10 font-bold">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-5xl py-10 font-bold">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-4xl py-10 font-bold">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-3xl py-10 font-bold">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-2xl py-10 font-bold">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-xl py-10 font-bold">{children}</h6>,
    blockquote: ({ children }: any) => <blockquote className="border-l-purple-500 border-l-4 pl-5 py-5 my-5">{children}</blockquote>,
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => <em className="text-primary font-semibold">{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-primary hover:decoration-gray-500"
        >
          {children}
        </Link>
      )
    }
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl py-5 list-disc space-y-5">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li className='ml-5' style={{ listStyleType: 'circle' }}>{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
}
