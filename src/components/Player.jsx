export const Player=({song,fn})=>{
    return(
        <div >
            <center><button onClick={()=>{
                fn(false,null)
            }} className="backtosongs">Back to Songs</button></center>
            <div className="BackCard">
                <center>
                <div class="card" >
                <div class="card-body">
                    <img src = {song?.artworkUrl100}></img>
                   
                <p>
                    <br/>
                <b>Singer Name :</b> {song?.artistName}
                <br/>
                <b>Track Name :</b> {song?.trackName}
            </p>
            <br/>
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>
        </audio>
            
        </div>
        </div>
        </center>
        </div>
        </div>
    )
}