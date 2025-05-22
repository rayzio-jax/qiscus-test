import { FileChartColumnIcon, MessageSquareTextIcon, SettingsIcon, UsersRoundIcon } from "lucide-react";
import Image from "next/image";

export default function ChatNav() {
    return (
        <nav id="menu-nav" className="pt-5 min-h-screen bg-violet-800">
            <ul className="flex flex-col h-full w-full items-center">
                <li aria-current className="w-full">
                    <button className="px-2 py-3 h-fit w-full duration-150 flex justify-center relative before:absolute before:bottom-2 before:rounded-full before:w-1/3 before:h-0.5 before:bg-violet-400">
                        <MessageSquareTextIcon className="text-white w-6 h-6" />
                    </button>
                </li>
                <li className="w-full">
                    <button className="cursor-pointer px-2 py-3 h-fit w-full hover:bg-violet-900 duration-150 flex justify-center">
                        <UsersRoundIcon className="text-white w-6 h-6" />
                    </button>
                </li>
                <li className="grow w-full">
                    <button className="cursor-pointer px-2 py-3 h-fit w-full hover:bg-violet-900 duration-150 flex justify-center">
                        <FileChartColumnIcon className="text-white w-6 h-6" />
                    </button>
                </li>
                <li className="w-full">
                    <button className="cursor-pointer px-2 py-3 h-fit w-full hover:bg-violet-900 duration-150 flex justify-center">
                        <div className="w-7 h-7 overflow-hidden rounded-full border-white border">
                            <Image
                                className="object-cover w-full h-full"
                                src={"https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                                width={100}
                                height={100}
                                alt="Profile Image"
                            />
                        </div>
                    </button>
                </li>
                <li className="w-full">
                    <button className="cursor-pointer px-2 py-3 h-fit w-full hover:bg-violet-900 duration-150 flex justify-center">
                        <SettingsIcon className="text-white w-6 h-6" />
                    </button>
                </li>
            </ul>
        </nav>
    );
}
