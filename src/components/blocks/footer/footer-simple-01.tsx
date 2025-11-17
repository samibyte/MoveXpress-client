"use client";

import { Github, Instagram, Twitter, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo/Logo";
import { Link } from "react-router";

const YEAR = new Date().getFullYear();

export const title = "Simple Footer";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-foreground rounded-4xl py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 items-center">
          <Logo className="text-muted" />
          <p className="text-muted text-center text-sm max-w-2xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="border-y py-8 w-9/12 border-[#03464D] border-dashed">
            <ul className="flex justify-center gap-9 text-muted">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/services">Coverage</Link>
              </li>
              <li>
                <Link to="/services">About Us</Link>
              </li>
              <li>
                <Link to="/services">Pricing</Link>
              </li>
              <li>
                <Link to="/services">Blog</Link>
              </li>
              <li>
                <Link to="/services">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-1">
            <Button asChild variant="secondary" size="icon" className="h-8 w-8">
              <a
                href="#"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="icon" className="h-8 w-8">
              <a
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="icon" className="h-8 w-8">
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="icon" className="h-8 w-8">
              <a
                href="#"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
