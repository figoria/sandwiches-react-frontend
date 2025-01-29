import {Link} from "react-router";

function PlaceCard({place, placeDeleted}){

    const deletePlace = async () =>{
        try{
            const result = await fetch(`http://145.24.222.144:8001/places/${place.id}`, {
                headers: {
                    'Accept': 'application/json'
                },
                method: 'DELETE'
            });
            if (result.status ===204){
                placeDeleted();
            }
        }catch (e){
            console.log(e);
        }
    };

    return(
        <article className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-yellow-200 mb-6">
            <section className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{place.name}</h2>
            </section>
            <section className="mb-4">
                <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-600">beschrijving</div>
                    <div className="text-base text-gray-700 leading-relaxed">{place.description}</div>
                </div>
            </section>
            <section className="flex items-center space-x-4">
                <Link className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      to={`/places/${place.id}`}>detail</Link>
                <Link className="text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
                      to={`/places/edit/${place.id}`}>edit</Link>
                <button className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                        onClick={deletePlace}>delete</button>
            </section>
        </article>
    )
}

export default PlaceCard;