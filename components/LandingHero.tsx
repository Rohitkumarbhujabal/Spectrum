import Link from "next/link"
import Button from "./Button"

export const LandingHero = () => {
    return (
        <div className="text-orange-500 font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>Explore, Listen, Repeat</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-rose-600">
                    <span className="hover:text-orange-600 transition duration-300 ease-in-out">
                        Music
                    </span>
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-300 font-mono">
                Start Your Musical Journey Today
            </div>
            <div>
                <Link href="/site">
                    <Button
                        className="w-30 h-15 md:text-lg p-4 md:p-6 rounded-full font-semibold"
                    >
                        START LISTENING FOR FREE
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal font-mono">
                No Credit Card Required
            </div>
        </div>
    )
}