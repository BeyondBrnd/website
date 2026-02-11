'use client'
import React from "react";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center">
                <div className="text-sm text-black/60">
                    © {new Date().getFullYear()} beyondbrnd • Marketing & Business Growth Agency
                </div>
            </div>
        </footer>
    );
}
