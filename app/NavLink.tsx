import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  isActive: boolean;
};

export default function NavLink({ category, isActive }: Props) {
  return (
    <Link
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}
      href={`/news/${category}`}
    >
      {category}
    </Link>
  );
}
