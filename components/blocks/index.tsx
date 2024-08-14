import { tinaField } from "tinacms/dist/react";
import { Page } from "../../tina/__generated__/types";

import { Hero } from "./hero";
import { Content } from "./content";
import { useTheme } from "next-themes";

export const Blocks = (props: Pick<Page, 'blocks'>) => {
  const { theme } = useTheme();

  return (
    <div>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </div>
  );
};

const Block = (block: any) => {
  switch (block.__typename) {
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksContent":
      return <Content data={block} />;
    default:
      return null;
  }
};