import {useEffect, useState} from "react";
import PlaceCard from "./PlaceCard.jsx";

function PlaceList(){
    const[SandwichPlace, setSandwichPlace] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const [filterOption, setFilterOption] = useState("all");

    async function loadData(){
        try{
            const response = await fetch('http://145.24.222.144:8001/places', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data)
            setSandwichPlace(data.items);
        } catch (error){
            console.log('fout', error )
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handlePlaceDeleted = (id) => {
        setSandwichPlace((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
    };

    const filteredItems = SandwichPlace
        ? SandwichPlace.filter((place) => {
            if (filterOption === "one") {
                return place.review === 'één' || place.review === 'een' || place.review === '1';
            }
            if (filterOption === "vegan") {
                return place.vegan === 'ja';
            }
            return true;
        })
        : [];



    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, endIndex);

    const totalPages = SandwichPlace ? Math.ceil(SandwichPlace.length / itemsPerPage) : 0;

    return(
        <main className="mx-auto max-w-screen-xl bg-blue-100">
            <div className="flex justify-center py-4 gap-4">
                <button
                    className={`px-4 py-2 rounded ${
                        filterOption === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
                    }`}
                    onClick={() => setFilterOption("all")}
                >
                    Alle Broodjes
                </button>
                <button
                    className={`px-4 py-2 rounded ${
                        filterOption === "one" ? "bg-blue-500 text-white" : "bg-gray-300"
                    }`}
                    onClick={() => setFilterOption("one")}
                >
                    laagste rating
                </button>
                <button
                    className={`px-4 py-2 rounded ${
                        filterOption === "vegan" ? "bg-blue-500 text-white" : "bg-gray-300"
                    }`}
                    onClick={() => setFilterOption("vegan")}
                >
                    Vegan
                </button>
            </div>
            <section className="mx-9 grid gap-4 py-6 grid-cols-1 sm:grid-cols-2">
                {SandwichPlace ? (
                    currentItems.length > 0 ? (
                        currentItems.map((place) => (
                            <PlaceCard key={place.id} place={place} placeDeleted={() => handlePlaceDeleted(place.id)}/>

                            ))
                    ): (
                    <p>Geen resultaten gevonden.</p>
                )
                ) : (
                        <p>laden...</p>
                    )}
            </section>
            <div className="flex justify-center items-center gap-2 py-4">
                <button
                    className="px-4 py-2 bg-gray-300 rounded"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Vorige
                </button>
                <button
                    className="px-4 py-2 bg-gray-300 rounded"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Volgende
                </button>
            </div>
        </main>
    )
}

export default PlaceList;