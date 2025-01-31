import {Link} from "react-router";

function ErrorPage(){
    return(
        <div
            className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-100 via-white to-red-50 text-gray-800">
            <h1 className="text-6xl font-extrabold text-red-600">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Oeps! Pagina niet gevonden</h2>
            <p className="text-lg mt-2 text-gray-600 text-center">
                De pagina die je zoekt bestaat niet of is verplaatst.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors focus:ring focus:ring-red-200 focus:outline-none"
            >
                Ga terug naar de homepage
            </Link>
        </div>
    )
}

export default ErrorPage;