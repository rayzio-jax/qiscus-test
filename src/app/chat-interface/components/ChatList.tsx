import { MessageCirclePlusIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ChatListProps {
    image: string;
    name: string;
}

export default function ChatList({ image, name }: ChatListProps) {
    return (
        <div id="chat-list" className="flex flex-col w-full min-h-screen max-w-xl border-r border-r-slate-300">
            <ChatListHeader />
            <ul className="h-full bg-[#F8F8F8]">
                <li>
                    <button aria-current className="bg-slate-200 p-3 inline-flex w-full space-x-2 text-left">
                        <div className="w-10 h-10 min-w-10 overflow-hidden rounded-full border-white border-2">
                            <Image className="object-cover w-full h-full" src={image} width={100} height={100} alt="Chat Room Thumbnail" />
                        </div>
                        <div>
                            <span className="text-black text-sm font-semibold">{name}</span>
                            <p className="line-clamp-1 max-w-[500px] text-xs text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse saepe tempore corrupti at quos! Ex illo, ad optio doloremque pariatur nihil eligendi temporibus
                                aperiam est suscipit dicta ducimus recusandae!
                            </p>
                        </div>
                    </button>
                </li>

                <li>
                    <button className="bg-slate-50 hover:bg-slate-100 duration-150 cursor-pointer p-3 inline-flex w-full space-x-2 text-left">
                        <div className="w-10 h-10 min-w-10 overflow-hidden rounded-full border-white border-2">
                            <Image className="object-cover w-full h-full" src={"https://picsum.photos/seed/tiger/500"} width={100} height={100} alt="Chat Room Thumbnail" />
                        </div>
                        <div>
                            <span className="text-black text-sm font-semibold">Product B</span>
                            <p className="line-clamp-1 max-w-[500px] text-xs text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse saepe tempore corrupti at quos! Ex illo, ad optio doloremque pariatur nihil eligendi temporibus
                                aperiam est suscipit dicta ducimus recusandae!
                            </p>
                        </div>
                    </button>
                </li>

                <li>
                    <button className="bg-slate-50 hover:bg-slate-100 duration-150 cursor-pointer p-3 inline-flex w-full space-x-2 text-left">
                        <div className="w-10 h-10 min-w-10 overflow-hidden rounded-full border-white border-2">
                            <Image className="object-cover w-full h-full" src={"https://picsum.photos/seed/penguin/500"} width={100} height={100} alt="Chat Room Thumbnail" />
                        </div>
                        <div>
                            <span className="text-black text-sm font-semibold">Product C</span>
                            <p className="line-clamp-1 max-w-[500px] text-xs text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse saepe tempore corrupti at quos! Ex illo, ad optio doloremque pariatur nihil eligendi temporibus
                                aperiam est suscipit dicta ducimus recusandae!
                            </p>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    );
}

const ChatListHeader = () => {
    return (
        <div className="bg-violet-500 py-5 px-3">
            <h1 className="font-bold text-2xl text-white">Chats</h1>
            <div className="flex items-center mt-1 space-x-2">
                <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative max-w-[240px] overflow-hidden rounded-lg last:focus-within:ring-2 last:focus-within:ring-black duration-150">
                        <SearchIcon
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-10 hover:bg-slate-100 text-black cursor-pointer py-3 pr-1 pl-1 border-l border-l-black duration-150"
                            width={36}
                            height={36}
                        />
                        <input id="search-bar" className="bg-[#F8F8F8] w-full h-full outline-none text-black text-xs py-1.5 pl-1.5 pr-8" type="text" />
                    </div>
                </form>
                <div className="flex items-center">
                    <button className="cursor-pointer hover:bg-violet-600 p-1.5 rounded-md duration-150">
                        <MessageCirclePlusIcon width={22} height={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};
