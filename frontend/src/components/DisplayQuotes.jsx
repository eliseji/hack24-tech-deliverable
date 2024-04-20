

export function DisplayQuotes({quotes}) {
    return <div>{quotes.map((quote)=> <Quote message={quote.message} name = {quote.name} time = {quote.time}></Quote> )}</div>
}

// name = {quote.name} time = {quote.time}

function Quote({message, name, time}) { 

    return (
        <div className="card-cont"> 

            <p class='mess'># {message}</p>
            <p class='ident'>{name}</p>
            <p classs='clock'>{time}</p>
        </div>

    )
}

