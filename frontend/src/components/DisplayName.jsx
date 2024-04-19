

export function DisplayName({quotes}) {
    return <div>{quotes.map((quote)=> <Name name={quote.name}></Name>)}</div>
}

function Name({name}) { 

    return <div>{name}</div>
}

