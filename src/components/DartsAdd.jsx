import axios from "axios";

function DartsAdd()
{
    function NewDarts(adat)
    {
        var data=
        {
            "name": adat.get("Tbx_Name"),
            "birth_date": adat.get("Tbx_Birth"),
            "world_ch_won": adat.get("Tbx_Won"),
            "profile_url": adat.get("Tbx_WebUrl"),
            "image_url": adat.get("Tbx_ImgUrl")
        }
        axios.post("https://darts.sulla.hu/darts", data)
        .then(
            res => console.log(res.data)
        )
        .catch(
            err => console.log(err)
        )
    }
    return(
    <div>
        <form action={NewDarts}>
            <label>Név: </label>
            <input type="text" name="Tbx_Name"/>
            <br/><label>Születési Dátum: </label>
            <input type="text" name="Tbx_Birth"/>
            <br/><label>Nyert világbajnokságok Száma: </label>
            <input type="text" name="Tbx_Won"/>
            <br/><label>Oldal: </label>
            <input type="text" name="Tbx_WebUrl"/>
            <br/><label>Kép Url: </label>
            <input type="text" name="Tbx_ImgUrl"/>
            <br/><button type="submit">Hozzáadd</button>
        </form>
    </div>
    );
}

export default DartsAdd;