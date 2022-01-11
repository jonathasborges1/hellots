interface ICliente{
    nome: string
    idade?: number
}

export default function Cliente(props){
    return(
        <>
            <span className="text-red-600"> Nome: {props.nome} </span> 
            <span>Idade: {props.idade ?? 'Não Informado'} </span> <br />
        </>
    )
}