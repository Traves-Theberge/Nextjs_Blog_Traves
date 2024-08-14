"use client";
import { useTina } from "tinacms/dist/react";
import { Blocks } from "../../components/blocks";
import { useTheme } from "next-themes";
import { Page } from "@/.tina/__generated__/types";

interface ClientPageProps {
  data: Page;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function ClientPage(props: ClientPageProps) {
  const { data } = useTina({...props});
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
      <Blocks {...data?.page} theme={theme} />
    </div>
  );
}