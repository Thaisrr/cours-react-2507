const Listes = function() {

    const food = ['Epinards', 'Pizza', 'Falafels', 'Houmous', 'Oranges'];

    function boucle() {
        const arr = [];
        for(let f of food) {
            arr.push(<li key={`L1-${f}`}>{f}</li>)
        }
        return arr;
    }

    function displayLi(f) {
        return <li key={`L4-${f}`} > {f} </li>
    }

    
    return (
        <>
            <h1>Les listes</h1>

            <article>
                <h2>Via une fonction</h2>

                <ul>
                    {boucle()}
                </ul>

            </article>

            <article>
                <h2>[Map] Fonction Fléchée</h2>
                <ul>
                    {food.map(f => <li key={`L2-${f}`} > {f} </li> )}
                </ul>
            </article>
            <article>
                <h2>[Map] Fonction anonyme</h2>

               <ul>
                    {food.map(function(f) {
                        return <li key={`L3-${f}`} > {f} </li>
                    } )}
               </ul>
            </article>

            <article>
                <h2>[Map] Appel Fonction</h2>

                <ul>
                {food.map(displayLi)}
                </ul>

            </article>

        </>
    )
}

export default Listes;