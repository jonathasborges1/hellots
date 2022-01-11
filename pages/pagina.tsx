import Cliente from '../components/Cliente'

export default function pagina(){
    return(
        <>
        <div style={{
            backgroundColor: "#222",
            color: "#fff",
            width: "100vh"
        }} >
            <Cliente nome = "Joao" idade={23}/>
            <Cliente nome ="Pedro" />
        </div>
           
        </>
    )
}