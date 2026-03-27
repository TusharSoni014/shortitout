import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

export default async function ShortUrlPage({
  params,
}: {
  params: Promise<{ "short-url": string }>;
}) {
  const { "short-url": shortUrl } = await params;

  const link = await prisma.link.findUnique({ where: { shortUrl } });
  if (!link) {
    notFound();
  }
  return redirect(link.longUrl);
}
