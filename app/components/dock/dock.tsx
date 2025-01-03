"use client";

import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconUserPlus,
  IconUsersGroup,
  IconConfetti,
  IconBooks,
  IconBuildingCircus
} from "@tabler/icons-react";


export function Dock() {

  const links = [
    {
      title: "Home",
      icon: (
        <IconBooks className="h-full w-full text-neutral-800" />
      ),
      href: `/`,
    },
    {
      title: "Community",
      icon: (
        <IconUsersGroup className="h-full w-full text-neutral-800" />
      ),
      href: "/community",
    },
    {
      title: "Litfest",
      icon: (
        <IconConfetti className="h-full w-full text-neutral-800" />
      ),
      href: "/litfest",
    },
    {
        title: "Events",
        icon: (
          <IconBuildingCircus  className="h-full w-full text-neutral-800" />
        ),
        href: "/events",
      },
    {
      title: "Login",   
      icon: (
        <IconUserPlus  className="h-full w-full text-neutral-600" />
      ),
      href: "/account/login",
    },
  ];

  return (
    <div className="flex items-center fixed justify-center bottom-5 left-0 right-0 h-16 w-full bg-nerutal-800">
      <FloatingDock
        items={links}
      />
    </div>
  );
}