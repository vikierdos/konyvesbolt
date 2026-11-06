import type { KonyvTipus } from "../adat"
import "./css/Sor.css"
import { useTablazatContext } from "../contexts/TablazatContext"

interface sorProps{
    elem: KonyvTipus
    index: number
}

export default function Sor({elem, index}:sorProps){
    const {deleteBook}=useTablazatContext()
    return(
        <tr>
            <td>{elem.cim}</td>
            <td>{elem.id}</td>
            <td>{elem.ar}</td>
            <td>{elem.db}</td>
            <td><button onClick={()=>deleteBook(index)}>Törlés</button></td>
        </tr>
    )
}
