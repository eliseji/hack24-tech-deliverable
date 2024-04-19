

export function DisplayQuotes({quotes}) {
    return <div>{quotes.map((quote)=> <Quote message={quote.message}></Quote>)}</div>
}

function Quote({message}) { 

    return <div>- {message}</div>
}

