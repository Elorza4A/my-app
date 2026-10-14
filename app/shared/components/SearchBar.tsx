interface Props{
    placeholder?: string;
    onQuery: () => void;
}


export default function SearchBar({placeholder = 'Ingrese una búsqueda', onQuery}: Props){
    return(
        <input type="text" placeholder={placeholder}/>
    )
}