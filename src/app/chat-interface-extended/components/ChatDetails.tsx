import Image from "next/image";
import React from "react";

interface ChatDetailsProps {
    image: string;
    name: string;
    participants: Array<{ [key: string]: string }>;
}

export default function ChatDetails({ image, name, participants }: ChatDetailsProps) {
    return (
        <div id="chat-details" className="bg-gray-800 flex gap-5 p-4 border-b border-b-slate-200">
            <div className="h-14 w-14 min-w-14 rounded-full border-2 border-white overflow-hidden">
                <Image className="object-cover w-full h-full" src={image} width={100} height={100} alt="Chat Thumbnail" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold -mb-1">{name}</span>
                <span className="text-xs -mb-1 line-clamp-1 max-w-[500px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio, consequatur vitae cumque, facilis quidem quis eos atque eaque inventore repudiandae explicabo rem qui a dicta
                    saepe ipsum consectetur fugit!
                </span>
                <div className="space-x-1 line-clamp-1">
                    {participants.map((v, i) => (
                        <span key={i} className="text-[10px]">
                            {v.name}
                            {i !== participants.length - 1 ? "," : "."}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
