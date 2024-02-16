
export function Header() {
    return (
        <header className="w-full p-4 flex justify-between max-w-screen-md mx-auto">
            <div>
                <p>10:0</p>
            </div>
            <div className="flex">
                <button>Prev</button>
                <button>Next</button>
            </div>
        </header>
    )
}