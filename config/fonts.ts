import { Fira_Code as FontMono, Inter as FontSans, Roboto } from "next/font/google"

export const fontRoboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
