import * as React from "react"
import { cn } from "@/lib/utils"

export interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean
}

export function PremiumCard({ className, hoverEffect = false, ...props }: PremiumCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden",
        hoverEffect && "hover:-translate-y-1 transition-transform duration-300",
        className
      )} 
      {...props} 
    />
  )
}

export function PremiumCardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 py-5 border-b border-border/50", className)} {...props} />
  )
}

export function PremiumCardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-heading text-lg font-bold leading-none tracking-tight", className)} {...props} />
  )
}

export function PremiumCardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-foreground mt-1.5", className)} {...props} />
  )
}

export function PremiumCardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6", className)} {...props} />
  )
}

export function PremiumCardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 py-4 bg-muted/30 border-t border-border/50 flex items-center", className)} {...props} />
  )
}
