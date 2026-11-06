import { useState, type ChangeEvent, type FormEvent } from "react"
import { useTablazatContext } from "../contexts/TablazatContext"
import "./css/Urlap.css"

export default function Urlap(){

    const {addBook}=useTablazatContext()
    const [ujKonyv, setUjKonyv] = useState({
        cim:''
        ,szerzo:''
        ,ar:0
        ,db:0
    })

    function adatValtozas(e: ChangeEvent<HTMLInputElement>){
        const{name, value, type} = e.target
        setUjKonyv(elozo=>({
            ...elozo,
            [name]: type === 'number' ? Number(value) : value
        }))
    }

    function mentes(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        if (!ujKonyv.cim.trim() || !ujKonyv.szerzo.trim()) return
    if (!Number.isFinite(ujKonyv.ar) || ujKonyv.ar < 0) return
    if (!Number.isInteger(ujKonyv.db) || ujKonyv.db < 0) return

    addBook({
      ...ujKonyv,
      cim: ujKonyv.cim.trim(),
      szerzo: ujKonyv.szerzo.trim()
    })

    setUjKonyv({
      cim: '',
      szerzo: '',
      ar: 0,
      db: 0
    })
    }


    return (
        <div className="urlap">
            <form onSubmit={mentes}>
                <div className="form-mezo">
                <label htmlFor="cim">A könyv címe:</label>
                <input type="text" name="cim" id="cim" value={ujKonyv.cim} onChange={adatValtozas}/>                    
                </div>
                <div className="form-mezo">
                <label htmlFor="cim">A könyv szerzője:</label>
                <input type="text" name="szerzo" id="szerzo" value={ujKonyv.szerzo} onChange={adatValtozas}/>
                </div>
                <div className="form-mezo">
                <label htmlFor="cim">A könyv ára:</label>
                <input type="number" name="ar" id="ar" min="0" value={ujKonyv.ar} onChange={adatValtozas}/>
                </div>
                <div className="form-mezo">
                <label htmlFor="cim">Hány darab van raktáron:</label>
                <input type="number" name="db" id="db" min="0" value={ujKonyv.db} onChange={adatValtozas}/>
                </div>
                <input type="submit" value="Hozzáad" />
            </form>
        </div>
    )
}
