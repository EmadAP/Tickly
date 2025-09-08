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
        <div className="dark:bg-slate-900 bg-white relative w-full max-w-md rounded-2xl shadow-lg p-6 dark:text-white text-black ">
          <button
            className="absolute top-3 right-3 dark:text-gray-400 text-gray-700 hover:text-orange-500 cursor-pointer"
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
