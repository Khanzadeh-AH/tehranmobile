"use client";

import dynamic from 'next/dynamic';

// Import SchemaMarkup with dynamic import in a client component
const SchemaMarkup = dynamic(() => import("@/components/seo/SchemaMarkup"), { ssr: false });

export default function ClientSchemaMarkup() {
  return <SchemaMarkup />;
}