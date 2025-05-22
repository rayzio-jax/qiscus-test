"use client";
import { Loader2 } from "lucide-react";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import ChatBox from "./components/ChatBox";
import ChatDetails from "./components/ChatDetails";
import ChatList from "./components/ChatList";
import ChatMenu from "./components/ChatMenu";

const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const DATA_URL = "https://gist.githubusercontent.com/asharijuang/23745f3132fa30e666db68d2bf574e4a/raw/5d556dbb9c2aea9fdf3e1ec96e45f62a88cea7b6/chat_response.json";
const PRODUCT_IMAGE = "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

type ChatData = Record<string, string[] | string | ChatData[]>;

export default function Chat() {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<ChatData | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(DATA_URL);
                const json = await response.json();
                const results = json.results[0];

                setData(results);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

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
        return () => window.removeEventListener("resize", viewportWidthChange);
    }, []);

    useEffect(() => {
        if (!loading && data) {
            console.log(data);
        }
    }, [loading]);

    if (loading) {
        return (
            <div className={`${inter.className} min-h-screen w-full flex justify-center items-center`}>
                <Loader2 className="animate-spin" height={48} width={48} />
            </div>
        );
    } else {
        return (
            <div className={`${inter.className} flex`}>
                <ChatMenu>{!isMobile && <ChatList image={data?.room?.image_url || PRODUCT_IMAGE} name={data?.room?.name || "Chat Room"} />}</ChatMenu>
                <div id="chat-ui" className="max-w-[1200px] w-full bg-[#F8F8F8] overflow-hidden flex flex-col">
                    <ChatDetails image={data?.room?.image_url || PRODUCT_IMAGE} name={data?.room?.name || "Chat Room"} participants={(data?.room?.participant as any) || []} />
                    <ChatBox comments={(data?.comments as any) || []} />
                </div>
            </div>
        );
    }
}
