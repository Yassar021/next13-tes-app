import Search from "./Search"

export default function({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <main className="flex p-5 space-x-4 divide-x-2">
            <div>
                <h1>Search</h1>
            </div>
            
            <div className="flex-1 pl-5">
                <div>
                    <Search />
                </div>
                <div>{children}</div>
            </div>
        </main>
    )
}