import type { ReactNode } from "react";

type PixelButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
  type?: "button" | "submit";
};

export function PixelButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: PixelButtonProps) {
  const classes = `pixel-button pixel-button--${variant} ${className}`;
  if (href) {
    return <a className={classes} href={href}>{children}</a>;
  }
  return <button className={classes} onClick={onClick} type={type}>{children}</button>;
}
