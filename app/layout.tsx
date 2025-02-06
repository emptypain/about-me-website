"use client"

import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import AboutMe from "./page";




export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          <Theme accentColor="plum" appearance="dark" grayColor="gray" scaling="110%" panelBackground="solid">
            <div className="container">
              <AboutMe/>
            </div>
            
          </Theme>
        </body>
    </html>
  );
}
