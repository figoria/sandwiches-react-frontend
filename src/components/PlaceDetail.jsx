import {useParams} from "react-router";
import {useEffect, useState} from "react";

function PlaceDetail(){
    const[sandwichSpot, setSandwichSpot] = useState(null);
    const params = useParams();

    async function loadSpot(){
        try{
            const response = await fetch(`http://145.24.222.144:8001/places/${params.id}`, {
                headers: {
                    'accept': 'application/json'
                }
            });
            const data = await response.json();
            setSandwichSpot(data);
            console.log(data)
        } catch (error){
            console.log('fout', error )
        }
    };

    useEffect(() => {
        loadSpot();
    }, []);

    return(
        <main className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
            <section className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
                {sandwichSpot ? (
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-gray-800">{sandwichSpot.name}</h1>
                            <p className="text-gray-700 text-base leading-relaxed">
                                <span className="font-semibold">Beschrijving:</span> {sandwichSpot.description}
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                <span className="font-semibold">Review:</span> {sandwichSpot.review}
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                <span className="font-semibold">Winkel:</span> {sandwichSpot.shop}
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                <span className="font-semibold">Adres:</span> {sandwichSpot.address}
                            </p>
                        </div>
                    )
                    : (
                        <p>laden...</p>
                    )}
            </section>
        </main>
    )
}

export default PlaceDetail;