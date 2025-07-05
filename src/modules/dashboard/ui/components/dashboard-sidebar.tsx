"use client";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DashboardUserButton from "../../dashboard-user-button";
import DashboardTrial from "./dashboard-trial";

const firstSection = [
  {
    icon: VideoIcon,
    label: "Meetings",
    href: "/meetings",
  },
  {
    icon: BotIcon,
    label: "Agents",
    href: "/agents",
  },
];

const secondSection = [
  {
    icon: StarIcon,
    label: "Upgrade",
    href: "/upgrade",
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className=" text-sidebar-accent-foreground">
        <Link href="/" className=" flex items-center gap-2 pt-2 px-2">
          <Image src={"/logo.svg"} height={36} width={36} alt="Meetai" />
          <p className=" text-2xl  font-semibold">MeetAi</p>
        </Link>
      </SidebarHeader>
      <div className=" flex-1 px-4 py-2">
        <Separator className=" opacity-10 text-[#5D6B68]" />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {firstSection.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        " h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6b68] from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                        pathname === item.href &&
                          " bg-linear-to-r/oklch border-[#5D6B68]/10  "
                      )}
                      isActive={pathname === item.href}
                    >
                      <Link href={item.href}>
                        <item.icon className=" size-5" />
                        <span className="  text-sm font-medium tracking-tight  ">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <Separator className=" opacity-10 text-[#5D6B68]" />

          {/* secondary section */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {secondSection.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        " h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6b68] from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                        pathname === item.href &&
                          " bg-linear-to-r/oklch border-[#5D6B68]/10  "
                      )}
                      isActive={pathname === item.href}
                    >
                      <Link href={item.href}>
                        <item.icon className=" size-5" />
                        <span className="  text-sm font-medium tracking-tight  ">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
      <SidebarFooter className=" text-white">
        <DashboardTrial />
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
