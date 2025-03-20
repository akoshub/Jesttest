import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DartsPut()
{
    const {id} = useParams()
    const [ data, setDarts ] = useState([])

    const [ name, setName ] = useState(data.name)
    const [ birth, setBirth ] = useState(data.birth_date)
    const [ won, setWon ] = useState(data.world_ch_won)
    const [ web, setWeb ] = useState(data.profile_url)
    const [ img, setImg ] = useState(data.image_url)

    useEffect(
        () => {axios.get(`https://darts.sulla.hu/darts/${id}`)
        .then(
            adat => {setDarts(adat.data);
                setName(adat.data.name)
                setBirth(adat.data.birth_date)
                setWon(adat.data.world_ch_won)
                setWeb(adat.data.profile_url)
                setImg(adat.data.image_url)
            }
        )
        .catch(
            err => console.log(err)
        )    
    }, [id]   
    )
    
    function UpdateDarts()
    {
        var data=
        {
            "name": name,
            "birth_date": birth,
            "world_ch_won": won,
            "profile_url": web,
            "image_url": img
        }
        axios.put(`https://darts.sulla.hu/darts/${id}`, data)
        .then(
            res => console.log(res.data)
        )
        .catch(
            err => console.log(err)
        )
    }
    return(
        <div>
            <label>Név: </label>
            <input type="text" onChange={e => setName(e.target.value)} value={name}/>
            <br/><label>Születési Dátum: </label>
            <input type="text" onChange={e => setBirth(e.target.value)} value={birth}/>
            <br/><label>Nyert világbajnokságok Száma: </label>
            <input type="text" onChange={e => setWon(e.target.value)} value={won}/>
            <br/><label>Oldal: </label>
            <input type="text" onChange={e => setWeb(e.target.value)} value={web}/>
            <br/><label>Kép Url: </label>
            <input type="text" onChange={e => setImg(e.target.value)} value={img}/>
            <br/><button onClick={UpdateDarts()}>Módosít</button>
        </div>
    );
}

export default DartsPut;