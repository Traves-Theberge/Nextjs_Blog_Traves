"use client";
import { useTina } from "tinacms/dist/react";
import { Blocks } from "../../components/blocks";
import { useTheme } from "next-themes";
import { Post as Page } from "../../tina/__generated__/types";

interface ClientPageProps {
  data: { page: Page };
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function ClientPage(props: ClientPageProps) {
  const { data } = useTina(props);
  const { theme } = useTheme();

  if (!data?.page) return <div>Loading...</div>;

  return (
    <div className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
      <Blocks blocks={undefined} {...data.page} />
    </div>
  );
}