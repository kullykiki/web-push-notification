// src/components/ServiceWorker.tsx
"use client"; // บังคับให้ทำงานบน Client เท่านั้น
import { useEffect } from "react";

export default function ServiceWorker() {
    useEffect(() => {
        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/firebase-messaging-sw.js")
                .then((registration) => {
                    console.log("✅ Service Worker Registered", registration);
                })
                .catch((error) => {
                    console.error("❌ Service Worker Registration Failed", error);
                });
        }
    }, []);

    return null; // ไม่ต้อง render อะไร
}
