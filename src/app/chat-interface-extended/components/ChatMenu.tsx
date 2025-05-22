import React from "react";
import ChatNav from "./ChatNav";

export default function ChatMenu({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div id="chat-menu" className="flex">
            <ChatNav />
            {children}
        </div>
    );
}
