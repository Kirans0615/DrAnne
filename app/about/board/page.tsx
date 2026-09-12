import Image from "next/image";
import type { Metadata } from "next";
import { board, boardFootnote } from "@/content/board";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the five directors of the dr.Anne Association: Anne Seifert, Lawrence Wasserman, Donna Pare, Robin Hoik Phillips and Fred W. Hoyt.",
};

export default function BoardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Board of Directors</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Five directors, elected for staggered terms, govern the dr.Anne Association.
      </p>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {board.map((member) => (
          <li key={member.name} className="rounded-xl border border-border p-6">
            <div className="aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-lg border border-border">
              <Image
                src={member.photo}
                alt={member.alt}
                width={240}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 font-display text-xl text-foreground">{member.name}</p>
            <p className="text-sm font-medium text-brand-red">{member.role}</p>
            {member.credentialLine ? (
              <p className="mt-2 text-sm text-muted-foreground">{member.credentialLine.value}</p>
            ) : null}
            <p className="mt-3 text-sm text-muted-foreground">Term: {member.term}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-muted-foreground">{boardFootnote.value}</p>
    </div>
  );
}
