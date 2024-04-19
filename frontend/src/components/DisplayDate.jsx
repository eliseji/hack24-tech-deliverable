

export function DisplayDate({quotes}) {
    return <div>{quotes.map((quote)=> <Time date={quote.time}></Time>)}</div>
}

function Time({date}) { 

    return <div>{date}</div>
}

