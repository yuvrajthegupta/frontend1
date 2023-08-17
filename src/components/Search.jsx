import { useRef } from "react"

export const Search=({fn})=>{
    const artist=useRef()
    return (
    <>
    <input ref={artist} type="text" className="Searchbar" size="40" placeholder="Search Artist wise Song"/>
    <button className="btnSearch btn-success;" onClick={()=>{
        fn(artist.current.value)
    }}>Search It</button>
    </>)
}