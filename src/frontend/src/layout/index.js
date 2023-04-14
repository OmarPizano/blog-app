export function Layout({children}) {
    return (
    <div className="
    flex
    items-center
    bg-neutral-700
    min-h-screen
    ">
        <div className="
        container
        p-10
        m-auto
        bg-neutral-900
        ">
            {children}
        </div>
    </div>
    )
}