interface ICliente{
    nome: string
    idade?: number
}

export default function Cliente(props){
    return(
        <>
            <span>Nome: {props.nome} </span> 
            <span>Idade: {props.idade ?? 'Não Informado'} </span> <br />
        </>
    )
}