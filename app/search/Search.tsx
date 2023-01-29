'use client'

import { useRouter } from "next/navigation";
import React, {FormEvent, useState} from "react";

function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`/search/${search}`);
    }

    return(
        <form onSubmit={handleSearch}>
            <input className="py-2" type="text" value={search} placeholder='Enter for the Search term' onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="px-4 py-2 mb-2 ml-2 font-bold text-white bg-blue-500 rounded-lg">Search</button>
        </form>
    )
}

export default Search