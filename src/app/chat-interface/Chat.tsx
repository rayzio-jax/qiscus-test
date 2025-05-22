"use client";
import { Loader2 } from "lucide-react";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import ChatBox from "./components/ChatBox";
import ChatDetails from "./components/ChatDetails";
import ChatList from "./components/ChatList";
import ChatMenu from "./components/ChatMenu";

const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const PRODUCT_IMAGE = "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

type ChatData = Record<string, string[] | string | ChatData[]>;
interface ChatProps {
    data: ChatData;
}

export default function Chat({ data }: ChatProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        function viewportWidthChange() {
            const width = window.innerWidth;

            if (width >= 768) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        }

        viewportWidthChange();
        window.addEventListener("resize", viewportWidthChange);
        setLoading(false);
        return () => window.removeEventListener("resize", viewportWidthChange);
    }, []);

    if (loading) {
        return (
            <div className={`${inter.className} min-h-screen w-full flex justify-center items-center`}>
                <Loader2 className="animate-spin" height={48} width={48} />
            </div>
        );
    } else {
        return (
            <div className={`${inter.className} flex`}>
                <ChatMenu>{!isMobile && <ChatList image={(data?.room?.image_url as any) || PRODUCT_IMAGE} name={(data?.room?.name as any) || "Chat Room"} />}</ChatMenu>
                <div id="chat-ui" className="max-w-[1200px] w-full bg-[#F8F8F8] overflow-hidden flex flex-col">
                    <ChatDetails image={(data?.room?.image_url as any) || PRODUCT_IMAGE} name={(data?.room?.name as any) || "Chat Room"} participants={(data?.room?.participant as any) || []} />
                    <ChatBox comments={(data?.comments as any) || []} />
                </div>
            </div>
        );
    }
}
