const LandingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="h-full bg-[url('/images/image2.jpg')] overflow-auto bg-cover">
            <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
        </main>
    )
}

export default LandingLayout;