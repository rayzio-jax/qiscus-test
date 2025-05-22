import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Qiscus Test",
};

export default function HomePage() {
    return (
        <div className={`${inter.className} flex flex-col items-center justify-center min-h-screen gap-5 mx-5`}>
            <h1 className="text-white font-semibold text-xl">Qiscus Test Chat Interface</h1>
            <p className="text-center">This is a homepage of Qiscus Web Developer Intern Test navigation, I put the result of the test case below here.</p>
            <div className="flex gap-5">
                <Link className="max-md:text-sm bg-slate-800 p-3 font-semibold rounded-md hover:bg-slate-800/80 duration-150" href={"/chat-interface"}>
                    Chat Interface
                </Link>
                <Link className="max-md:text-sm bg-slate-800 p-3 font-semibold rounded-md hover:bg-slate-800/80 duration-150" href={"/chat-interface-extended"}>
                    Chat Interface Extended
                </Link>
            </div>
        </div>
    );
}
