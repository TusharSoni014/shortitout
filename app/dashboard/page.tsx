"use client";

import Link from "next/link";
import { ArrowUpRight, Copy } from "@phosphor-icons/react/dist/ssr";
import { useAllLink } from "../hooks/useAllLink";
import type { Link as PrismaLink } from "@/lib/generated/prisma/browser";

export default function DashboardPage() {
  const { data: allLinks, isLoading: allLinksLoading } = useAllLink();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0e0e10] text-[#e7e4ec]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/aida-public/AB6AXuD24LSYMz6LeYYMOxSmzBLE6DLsZw0H9l52s-RTlrNw-N5CJzCKnPEK-UyoaAQWyKtU7bsflsCDygIFiC_cdBNg1yLtPnMBDgy_VGKfVeN6xFzoEXGATXo9K8xwjwV674hOyyRqATnfVktcPoiA1PMjAec_B5iBGx2Rkz1V8WW6fwFtxNkQH7-BSyNHjUUyMgEHcM3ysqgA7J8CavRYy46SqvaC578sB6rh5W5dcKcanHNaNamd1X4rPzwTRm1RhmBDojIulLuvUa0)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_top_left,#18181b_0%,#0e0e10_70%)]" />

      <div className="relative z-10 flex min-h-screen">
        <aside className="hidden w-[320px] border-r border-zinc-800/50 bg-zinc-950/40 p-6 lg:block">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
            Recently Shortened
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            Latest 24H Activity
          </p>

          <div className="mt-8 space-y-2">
            {allLinksLoading ? (
              <div>Loading...</div>
            ) : (
              allLinks?.map((link: PrismaLink) => (
                <button
                  key={link.shortUrl}
                  className="group w-full border border-transparent bg-transparent px-4 py-4 text-left transition hover:border-zinc-800 hover:bg-zinc-900/80"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-lg font-semibold tracking-tight text-zinc-200">
                      {link.shortUrl}
                    </p>
                    <ArrowUpRight className="text-zinc-500 transition group-hover:text-zinc-300" />
                  </div>
                  <p className="mt-1 truncate font-mono text-xs text-zinc-500">
                    {link.longUrl}
                  </p>
                </button>
              ))
            )}
          </div>
        </aside>

        <main className="flex flex-1 items-center justify-center px-6 py-16 lg:px-16">
          <div className="w-full max-w-2xl">
            <div className="mb-10 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                Active Link Asset
              </p>
              <h1 className="mt-4 text-5xl font-black tracking-tighter md:text-6xl">
                short.it/x7y2
              </h1>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Created Oct 24, 2023
              </p>
            </div>

            <div className="mb-10 flex justify-center">
              <div className="border border-white/10 bg-white p-7 shadow-[0_0_40px_rgba(255,255,255,0.07)]">
                <div className="grid h-48 w-48 grid-cols-8 gap-1 bg-white p-2">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className={
                        "aspect-square " +
                        ([
                          0, 1, 2, 8, 10, 16, 17, 18, 6, 7, 14, 22, 48, 49, 50,
                          56, 58, 62, 63, 35, 36, 43, 44, 53,
                        ].includes(i)
                          ? "bg-black"
                          : "bg-white")
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Short Alias
                </p>
                <div className="flex items-center gap-3 border border-zinc-700/60 bg-zinc-800/50 px-4 py-4">
                  <span className="font-mono text-sm font-semibold text-zinc-100">
                    https://short.it/x7y2
                  </span>
                  <Copy className="ml-auto text-zinc-400" />
                </div>
              </div>

              <div>
                <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Destination Target
                </p>
                <div className="flex items-center gap-3 border border-zinc-800 bg-zinc-900/70 px-4 py-4">
                  <span className="truncate font-mono text-xs text-zinc-400">
                    https://vimeo.com/channels/staffpicks/8273641-short-film
                  </span>
                  <Copy className="ml-auto text-zinc-500" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="bg-zinc-100 px-8 py-3 font-semibold tracking-wide text-zinc-950 transition hover:bg-white"
              >
                Create New Short Link
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
