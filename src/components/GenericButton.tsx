import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary"; // we can add more kinds in the future!!!
type ButtonSize = "sm" | "md" | "lg"; // we can add more kinds in the future!!!

// TODO: maybe support icons as a prop too and have size defaults and stuff

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

// idk if this is good or hacky, seems to work fairly well
type ButtonButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type AnchorButton = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

type ButtonProps = ButtonButton | AnchorButton;

export function GenericButton(
  { variant = "primary", size = "md", className = "", children, ...rest }:
    ButtonButton,
) {
  // TODO: flesh these out + actually properly tune the stuff for the sizes (it is currently bad) ((I just try to write clean code, not pretty websites (skill issue)))
  const baseStyles =
    "inline-flex items-center justify-center rounded-full transition-all duration-200  disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const variantStyles = {
    primary: "bg-ie-red text-white hover:bg-ie-red-hover focus:ring-ie-red",
  };
  const sizeStyles = {
    sm: "shadow-sx hover:shadow-sm px-3 py-1.5 text-xs sm:text-sm",
    md: "shadow-sm hover:shadow-md px-5 py-1.5 text-md",
    lg: "shadow-md hover:shadow-ld px-8 py-1.5 text-xl",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as AnchorButton;
    return (
      <Link
        href={href as string} // have to destructure because href is defined as string | undefined which isn't compatible with Url xd
        {...anchorProps}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {children}
    </button>
  );
}
