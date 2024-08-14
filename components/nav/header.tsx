"use client";

import React from "react";
import NavItems from "./nav-items";
import { useLayout } from "../layout/layout-context";
import Link from "next/link";
import { Container } from "../layout/container";
import { Icon } from "../icon";
import { ThemeSwitcher } from "../theme-switcher";

const headerColor = {
  default:
    "text-black dark:text-white from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
};

export const Header = () => {
  const { globalSettings } = useLayout();
  const header = globalSettings?.header || {};

  return (
    <div className="bg-base-100 shadow-sm">
      <Container size="custom" className="navbar">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            <Icon
              parentColor={header.color}
              data={{
                name: header?.icon?.name,
                color: header?.icon?.color,
                style: header?.icon?.style,
              }}
            />
            <span>{header?.name}</span>
          </Link>
        </div>
        <div className="flex-none">
          <NavItems />
          <ThemeSwitcher />
        </div>
      </Container>
    </div>
  );
};