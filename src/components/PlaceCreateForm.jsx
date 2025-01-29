import {useState} from "react";
import {useNavigate} from "react-router";

function PlaceCreateForm(){
    const navigate = useNavigate()
    const[formData, setFormData] = useState({
        name: '',
        description: '',
        review: '',
        shop: '',
        address: '',
    });

    const handleInputChange = (e) =>{
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const postData =async () =>{
        const result = await fetch('http://145.24.222.144:8001/places', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        });
        const data = await result.json();
        console.log(data);

        if(result.status === 201){
            navigate(`/places/${data.id}`);
        }
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('verzonden', formData)
        postData();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
            <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">naam:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                    Beschrijving:
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="review" className="block text-gray-700 font-semibold mb-2">
                    Review:
                </label>
                <input
                    type="text"
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="shop" className="block text-gray-700 font-semibold mb-2">
                    Winkel:
                </label>
                <input
                    type="text"
                    id="shop"
                    name="shop"
                    value={formData.shop}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                    Adres:
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors focus:ring focus:ring-blue-200 focus:outline-none">
                Verzenden
            </button>
        </form>)
}

export default PlaceCreateForm;