import { tv } from "tailwind-variants";


export const baseButton = tv({
  base: "font-semibold border-2 text-lg border-white text-white py-1 px-3 hover:border-purple-500 hover:bg-white hover:text-black hover:drop-shadow-[0_8px_8px_rgba(93,63,211,1)]",
  variants: {
    color: {
      primary: "bg-purple-500 hover:bg-white",
      secondary: "bg-purple-500 hover:bg-purple-700",
      success: "bg-green-500 hover:bg-green-700",
      error: "bg-red-500 hover:bg-red-700",
    },
  }
});

export const largeButton = tv({
  base: "font-semibold rounded-full border-2 border-white text-white py-10 px-10 text-4xl hover:border-purple-500 hover:bg-white hover:text-black hover:drop-shadow-[0_8px_8px_rgba(93,63,211,1)]",
  variants: {
    color: {
      primary: "bg-purple-500 hover:bg-white",
      secondary: "bg-purple-500 hover:bg-purple-700",
      success: "bg-green-500 hover:bg-green-700",
      error: "bg-red-500 hover:bg-red-700",
    },
  }
});

export const ctaButton = tv({
  base: "font-semibold rounded-full border-2 border-white text-white py-10 px-10 text-6xl hover:border-purple-500 hover:bg-white hover:text-black hover:drop-shadow-[0_8px_8px_rgba(93,63,211,1)]",
  variants: {
    color: {
      primary: "bg-purple-500 hover:bg-white",
      secondary: "bg-purple-500 hover:bg-purple-700",
      success: "bg-green-500 hover:bg-green-700",
      error: "bg-red-500 hover:bg-red-700",
    },
  }
});

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true
  }
});
