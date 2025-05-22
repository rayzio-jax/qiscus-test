import React from "react";
import Chat from "./Chat";
import { Metadata } from "next";

const DATA_URL = "https://gist.githubusercontent.com/asharijuang/23745f3132fa30e666db68d2bf574e4a/raw/5d556dbb9c2aea9fdf3e1ec96e45f62a88cea7b6/chat_response.json";

export const metadata: Metadata = {
    title: "Chat Interface",
};

export default async function ChatPage() {
    const res = await fetch(DATA_URL);
    const data = await res.json();

    return <Chat data={data.results[0]} />;
}
