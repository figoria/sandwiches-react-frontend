import {useEffect, useState} from "react";
import PlaceCard from "./PlaceCard.jsx";

function PlaceList(){
    const[SandwichPlace, setSandwichPlace] = useState(null);

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

    return(
        <main className="mx-auto max-w-screen-xl bg-blue-100">

            <section className="mx-9 grid gap-4 py-6 grid-cols-1 sm:grid-cols-2">
                {SandwichPlace ? (
                        <div>
                            {SandwichPlace.map((place)=>(
                                <PlaceCard key={place.id} place={place} spotDeleted={loadData}/>

                            ))}
                        </div>
                    )
                    :(
                        <p>laden...</p>
                    )}
            </section>
        </main>
    )
}
export default PlaceList;