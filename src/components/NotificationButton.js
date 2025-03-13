// components/NotificationButton.js
"use client";
import { useEffect, useState } from "react";
import { messaging, getToken, onMessage } from "@/lib/firebaseConfig";

const NotificationButton = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        // ขออนุญาต Notification และดึง FCM Token
        const requestPermission = async () => {
            try {
                const permission = await Notification.requestPermission();
                if (permission === "granted") {
                    const currentToken = await getToken(messaging, {
                        vapidKey: "BPJSHb0JMP0mREVnKZ-8W5HEnr6nDFOVef80jnRedFOaSQJNHHYP5QIzR0Gl3R4kiJgSELZMnLIudUYcKlFj1L8",
                    });
                    if (currentToken) {
                        console.log("FCM Token:", currentToken);
                        setToken(currentToken);
                    } else {
                        console.log("No registration token available.");
                    }
                }
            } catch (error) {
                console.error("Error getting permission: ", error);
            }
        };

        requestPermission();

        // รับข้อความเมื่อแอปทำงานอยู่ (foreground)
        onMessage(messaging, (payload) => {
            console.log("Message received: ", payload);
            alert(payload.notification.title);
        });
    }, []);

    return (
        <button onClick={() => alert(`FCM Token: ${token}`)}>
            Get Notification Token
        </button>
    );
};

export default NotificationButton;
