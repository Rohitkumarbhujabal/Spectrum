import Link from "next/link"
import Button from "./Button"
import Image from "next/image"

export const LandingNavbar = () => {
    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-14 w-14 mr-4">
                    <Image
                        fill
                        alt="Logo"
                        src="/images/logo.png"
                    />
                </div>
                <h1 className="text-4xl font-bold text-orange-500 font-mono">
                    SPECTRUM
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href="/site">
                    <Button>
                        GET STARTED
                    </Button>
                </Link>
            </div>
        </nav>
    )
}