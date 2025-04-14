"use client";

import * as React from "react";
import {
  LayoutDashboard,
  FolderPlus,
  FileText,
  MessageCircle,
  BookOpen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard, isActive: true },
    {
      title: "Projects", url: `/dashboard/projects`, icon: FolderPlus, items: [
        { title: "Create Project", url: `/dashboard/add-project` },
      ]
    },
    {
      title: "Blogs", url: `/dashboard/all-blogs`, icon: BookOpen, items: [
        { title: "Create Blog", url: `/dashboard/blog` },
      ]
    },
    {
      title: "Skills", url: "/dashboard/skill", icon: FileText, items: [
        { title: "Add Skill", url: `/dashboard/add-skills` },
      ]
    },
    { title: "Messages", url: "/dashboard/messages", icon: MessageCircle },
  ];

  return (
    <Sidebar className="bg-transparent" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex  items-center justify-center">
                  <span className="text-xl font-bold">NoobWork</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
