import React from "react";
import Chat from "./Chat";
import { promises as fs } from "fs";

export default async function ChatExtendedPage() {
    // Read JSON from local
    const file = await fs.readFile(process.cwd() + "/src/lib/extended-response.json", "utf-8");
    const data = await JSON.parse(file);

    return <Chat data={data.results[0]} />;
}
