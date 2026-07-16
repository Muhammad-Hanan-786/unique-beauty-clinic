import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/923185697460"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-primary/60 bg-surface/90 text-primary shadow-2xl backdrop-blur transition-all duration-500 hover:bg-primary hover:text-primary-foreground md:bottom-8"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}

export function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-xl md:hidden">
      <Link
        to="/booking"
        className="btn-3d block w-full border border-primary bg-primary py-3 text-center text-xs uppercase tracking-[0.32em] text-primary-foreground"
      >
        Book Appointment
      </Link>
    </div>
  );
}

export function CursorGlow() {
  return null;
}
