// components/renderers/MemberSummary.tsx
import React from "react";
import Link from 'next/link';
import { Block } from "@/config";

interface BlockSummaryProps {
    block: Block;
}

export default function BlockSummary({ block }: BlockSummaryProps) {
  return (
    <Link href={`#${block.slug}`}>{block.title}</Link>
  );
}
