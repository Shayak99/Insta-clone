import {useState,useEffect} from 'react';
import faker from 'faker';

function Suggestions() {

    const [suggestions, setSuggestions] = useState();

    useEffect(() => {
        const suggest = [...Array(5)].map((_,i) => ({
            ...faker.helpers.contextualCard(),
            id : i
        }))
        setSuggestions(suggest)
    },[])

    return (
        <div className="mt-5 ml-10">
            <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold text-gray-400">Suggestions for You</h3>
            <button className="text-gray-400 font-semibold" onClick={(e) => e.preventDefault()}>
            See All 
            </button>
            </div>
            {suggestions && suggestions.map((item) => (
                <div key={item.id}
                className="flex items-center justify-between mt-3"
                >
                    <img 
                    className="w-10 h-10 rounded-full border p-[2px]"
                    src={item.avatar} alt="pics" />

                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">{item.username}</h2>
                        <h3 className="text-xs text-gray-400">Works @ {item.company.name}</h3>
                    </div>
                    <button className="text-blue-400 text-sm font-bold">Follow</button>
                </div>
            ))} 
        </div>
    )
}

export default Suggestions
