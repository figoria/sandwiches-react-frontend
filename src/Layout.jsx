import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <div className="mx-auto max-w-screen-xl">
            <header>
                <nav className="flex gap-4">
                    <Link to={`/`} className="italic p-4 font-bold">Home</Link>
                    <Link to={`/places`} className="italic p-4 font-bold">places</Link>
                    <Link to={`/places/create`} className="italic p-4 font-bold">create</Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default Layout;