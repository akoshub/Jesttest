import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DartsList()
{
    const [dartsok, setDarts] = useState([]);
    useEffect(() => {
        axios.get("https://darts.sulla.hu/darts")
            .then((res) => {
                setDarts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }, []);

    function DartsDelete(id)
    {
        axios.delete(`https://darts.sulla.hu/darts/${id}`)
        .then(
            res => console.log(res)
        )
        .catch(
            err => console.log(err)
            
        )
        
    }
    return(
    <div>
            <div className= "tarolo">
        {dartsok.map(darts =>(
        <div className="kartya" key={darts.id}>
    <img src={ darts.image_url } alt={darts.name}/>
    <div>
        <h5>{darts.name}</h5>
        <p>
        Született: {darts.birth_date} <br/>Nyert világbajnokságok száma: {darts.world_ch_won}
        <br/><a href={darts.profile_url}>Wikipédia</a>
        <br/><br/><Link to={darts.id+"/DartsPut"}>Szerkesztés</Link>
        <br/><Link onClick={() => DartsDelete(darts.id)}>Törlés</Link>
        </p>
    </div>
    </div>
        ))}
    </div>

    </div>
    );
}

export default DartsList;