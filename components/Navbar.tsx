"use client"
import React, { useState } from "react"
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-md mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.linkedin.com/in/murilo-kuehne/">
              <span className="hover:text-blue-400 hover:underline-offset-4 hover:underline">
                Linkedin
              </span>
            </HoveredLink>
            <HoveredLink href="https://github.com/MuriloKuehne">
              <span className="hover:text-blue-400 hover:underline-offset-4 hover:underline">
                Github
              </span>
            </HoveredLink>
            <HoveredLink href="https://www.instagram.com/murilo.kuehne/">
              <span className="hover:text-blue-400 hover:underline-offset-4 hover:underline">
                Instagram
              </span>
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className=" text-md grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Educational SaaS App - Converso"
              href="https://github.com/MuriloKuehne/educational-saas-app"
              src="../../images/educational-saas.png"
              description="Fullstack SaaS App using NextJS, Supabase, AI and Clerk."
            />
            <ProductItem
              title="Site.set"
              href="https://github.com/MuriloKuehne/Site.set"
              src="../../images/siteset.png"
              description="Create your own website in minutes with Site.set - Landing Page"
            />
            <ProductItem
              title="Snitap"
              href="https://github.com/MuriloKuehne/LP-de-Patins"
              src="../../images/snitap.png"
              description="Renting skates platform. - Landing Page "
            />
            <ProductItem
              title="API Refund 2.0"
              href="https://github.com/MuriloKuehne/api-refund/settings"
              src="../../images/api.avif"
              description="Backend part of the Refund 2.0 project."
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
