import { DownloadIcon, PaperclipIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ChatBoxProps {
    comments: Array<{ [key: string]: string }>;
}

export default function ChatBox({ comments }: ChatBoxProps) {
    function getRandomTimestamp(startTime: string, endTime: string) {
        const start = new Date(startTime).getTime();
        const end = new Date(endTime).getTime();

        if (start >= end) throw new Error("Start time must be before end time");

        const randomTime = new Date(start + Math.random() * (end - start));

        // Return formatted for a chat timestamp
        return randomTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    }

    return (
        <div id="chat-box" className="flex flex-col relative grow">
            <ul className="flex-1 overflow-y-auto pt-2 max-h-[78vh]">
                {comments.map((v, i) => (
                    <li key={i} className={`${v.sender === "agent@mail.com" ? "justify-end" : "justify-start"} flex px-2 mb-2 w-full`}>
                        <div className="flex flex-col">
                            <div
                                className={`${v.sender === "agent@mail.com" ? "bg-purple-300 text-gray-800" : "bg-gray-800 text-white"} ${
                                    v.type === "text" && "p-2"
                                } w-full rounded-xl text-sm max-w-[250px] text-pretty break-words overflow-hidden`}
                            >
                                {v.type === "text" ? (
                                    v.message
                                ) : v.type === "file" && v.attachments?.type === "image" ? (
                                    <div className="max-w-[144px] max-h-[188px] min-w-[104px] rounded-md overflow-hidden shadow shadow-black flex justify-center items-center">
                                        <Image className="object-cover w-full h-full" src={v.attachments?.file || null} width={100} height={100} alt={v.attachments?.file_name} />
                                    </div>
                                ) : v.type === "file" && v.attachments?.type === "document" ? (
                                    <Link className="text-xs inline-flex p-2 justify-center items-center gap-2" href={v.attachments?.file || null} download>
                                        {v.attachments?.file_name} <DownloadIcon width={20} />
                                    </Link>
                                ) : (
                                    ""
                                )}
                            </div>
                            <span className={`${v.sender === "agent@mail.com" ? "justify-end" : "justify-start"} flex text-gray-800 text-[10px]`}>
                                {getRandomTimestamp("2025-05-22T08:00:00", "2025-05-22T18:00:00")}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            <form onSubmit={(e) => e.preventDefault()} className="h-[85px] border-gray-700 border-t flex w-full absolute bottom-0">
                <div className="w-full">
                    <textarea
                        className="resize-none outline-none text-white w-full h-full p-3 border-r border-gray-800 text-xs leading-tight text-pretty bg-violet-600"
                        placeholder="Enter a message here..."
                    ></textarea>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button className="cursor-pointer p-2 hover:bg-violet-900 h-full bg-violet-700 duration-150" type="submit">
                        <SendIcon className="text-slate-200" />
                    </button>
                    <button className="cursor-pointer p-2 hover:bg-violet-900 h-full bg-violet-700 duration-150">
                        <PaperclipIcon className="text-slate-200" />
                    </button>
                </div>
            </form>
        </div>
    );
}
