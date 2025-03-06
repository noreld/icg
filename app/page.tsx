"use client";

import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";
import NavbarComponent from "@/components/navbar";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <NavbarComponent />
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "blue" })}>
          Intelligent Career Guidance&nbsp;
        </span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          AI-powered platform that helps students identify potential career
          paths based on their skills, interests, and preferences.
        </div>
      </div>

      <div className="flex flex-col gap-2 w-min">
        <Link className="w-full" href={"/questions"}>
          <Button
            className={`${buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })} w-full`}
          >
            Let&apos;s Begin
          </Button>
        </Link>
        <Link className="w-full" href={"/dashboard"}>
          <Button
            className={`${buttonStyles({
              color: "secondary",
              radius: "full",
              variant: "shadow",
            })} w-full`}
          >
            Visit dashboard
          </Button>
        </Link>
      </div>
    </section>
  );
}
