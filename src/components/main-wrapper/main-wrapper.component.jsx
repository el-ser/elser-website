const MainWrapper = ({ children}) => {
    return (
        <main className="flex flex-col flex-grow w-full">
            {children}
        </main>
    )
}

export default MainWrapper