"use client";
import React from "react";
import { X } from "lucide-react";
// import { cn } from "@/lib/utils";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Popup({ isOpen, onClose, children }: PopupProps) {
  if (!isOpen) return null;
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose} />
      )}

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50  p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 relative w-full max-w-md rounded-2xl shadow-lg p-6 text-white">
          <button
            className="absolute top-3 right-3 text-slate-400 hover:text-orange-500"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {children}
        </div>
      </div>
    </>
  );
}

export default Popup;
