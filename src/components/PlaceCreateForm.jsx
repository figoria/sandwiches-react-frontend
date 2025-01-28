import {useState} from "react";
import {useNavigate} from "react-router";

function PlaceCreateForm(){
    const navigate = useNavigate()
    const[formData, setFormData] = useState({
        title: '',
        description:'',
        review:'',
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

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">naam:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="description">beschrijving:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="review">review:</label>
                <input
                    type="text"
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="shop">winkel:</label>
                <input
                    type="text"
                    id="shop"
                    name="shop"
                    value={formData.shop}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="address">adres:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Verzenden</button>
        </form>)
}

export default PlaceCreateForm;