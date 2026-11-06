import { createContext, useContext, useState, type ReactNode } from "react";
import { KONYVLISTA, type KonyvTipus } from "../adat";

export const TablazatContext = createContext<TablazatContextValue | undefined>(undefined);
export type UjKonyvTipus = Omit<KonyvTipus, "id">;

interface TablazatProviderProps{
    children: ReactNode
}

interface TablazatContextValue{
    lista: KonyvTipus[]
    deleteBook:(index:number)=>void
    addBook:(konyv: UjKonyvTipus) => void;
}

export function TablazatProvider({children}:TablazatProviderProps){
    const [lista,setLista]=useState<KonyvTipus[]>(KONYVLISTA)

    function deleteBook(index: number){
        console.log(index)
        const ujLista:KonyvTipus[] = [...lista]
        ujLista.splice(index,1)
        setLista(ujLista)
    }

    function addBook(konyv: UjKonyvTipus){
        setLista(elozoLista => {
            const ujId = Math.max(
                0,
                ...elozoLista.map(k => k.id)
            ) + 1;

            return [...elozoLista, { ...konyv, id: ujId }];
        });
    }

    return(
        <TablazatContext.Provider value={{lista, deleteBook, addBook}}>
            {children}
        </TablazatContext.Provider>
    )
}



export function useTablazatContext(){
    const context=useContext(TablazatContext)
      if(context === undefined){
        throw new Error("Az app csak provideren belül használható!")
      }
      return context
}