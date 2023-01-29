import TodosList from "./TodosList"

export default function({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <main className="flex">
            <div>
                {/* @ts-ignore */}
                <TodosList />
            </div>
            
            <div className="flex-1">
                {children}
            </div>
        </main>
    )
}