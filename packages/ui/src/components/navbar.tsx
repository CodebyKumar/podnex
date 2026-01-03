"use client"

import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, children, ...props }, ref) => {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20)
      }
      
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
      <nav
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-4 px-4",
          className
        )}
        {...props}
      >
        <div className={cn(
          "w-full max-w-[60%] rounded-2xl transition-all duration-300",
          isScrolled 
            ? "bg-[var(--studio-bg-dark)]/95 backdrop-blur-xl border border-[var(--studio-accent)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" 
            : "bg-[var(--studio-bg-dark)]/50 backdrop-blur-sm border border-transparent"
        )}>
          {children}
        </div>
      </nav>
    )
  }
)
Navbar.displayName = "Navbar"

const NavbarContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-16 items-center justify-between px-6 md:px-8 w-full",
      className
    )}
    {...props}
  />
))
NavbarContainer.displayName = "NavbarContainer"

const NavbarBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 font-bold text-xl group cursor-pointer", className)}
    {...props}
  />
))
NavbarBrand.displayName = "NavbarBrand"

const NavbarNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("hidden md:flex items-center gap-6", className)}
    {...props}
  />
))
NavbarNav.displayName = "NavbarNav"

const NavbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "text-sm font-semibold transition-all hover:text-[var(--studio-accent)] cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--studio-accent)] after:transition-all hover:after:w-full text-[var(--studio-text-main)]/80 hover:text-[var(--studio-accent)]",
      className
    )}
    {...props}
  />
))
NavbarLink.displayName = "NavbarLink"

const NavbarActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3", className)}
    {...props}
  />
))
NavbarActions.displayName = "NavbarActions"

export { Navbar, NavbarContainer, NavbarBrand, NavbarNav, NavbarLink, NavbarActions }
