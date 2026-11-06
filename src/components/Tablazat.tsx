import { useTablazatContext } from "../contexts/TablazatContext";
import Sor from "./Sor";
import "./css/Tablazat.css";


export default function Tablazat(){
    const {lista}=useTablazatContext()
    return(
        <div className="tablazat">
            <table>
                <thead>
                    <th>cím</th>
                    <th>szerző</th>
                    <th>ár</th>
                    <th>darabszám</th>
                    <th></th>
                </thead>
                <tbody>
                    {lista.map((e,i)=>(<Sor key={e.id} elem={e} index={i}/>))}
                </tbody>
            </table>
        </div>
    )
}
