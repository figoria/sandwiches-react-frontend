import {useParams, useNavigate } from "react-router";
import {useEffect, useState} from "react";
import IdError from "./IdError.jsx";

function PlaceDetail(){
    const[sandwichSpot, setSandwichSpot] = useState(null);
    const params = useParams();
    const navigate = useNavigate();


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
            if (response.status === 400){
                navigate('/IdError')
                return;
            }
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
                            <img src={sandwichSpot.imageUrl} alt={sandwichSpot.name} className="w-20"/>

                            <p className="text-gray-700 text-base leading-relaxed">
                                <span className="font-semibold">Beschrijving:</span> {sandwichSpot.description}
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                <span className="font-semibold">Review:</span> {sandwichSpot.review}
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                <span className="font-semibold">vegan:</span> {sandwichSpot.vegan}
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                <span className="font-semibold">Winkel:</span> {sandwichSpot.shop}
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                <span className="font-semibold">Adres:</span> {sandwichSpot.address}
                            </p>
                            <div className="text-gray-700 text-base leading-relaxed"> {params.id}</div>

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