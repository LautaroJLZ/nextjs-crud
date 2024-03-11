import Link from "next/link"

const NotFound = () => {
    return(
        <div>
            <section className="flex h-[calc(100vh-7rem)] justify-center items-center ">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Not Found</h1>
                    <Link href="/" className="text-xl mt-2 hover:text-gray-600">
                        Volver Inicio
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default NotFound