export const Child1 = function (props) {
    console.log(props)
    return (
        <article>
            <p><small>**** début du composant ***</small></p>
            <h3>{props.children}</h3>

            <hr/>

        </article>
    )
}


export const Child2 = function (props) {

    return (
        <>
            <p><small>**** Composant Child 2 ****</small></p>
            <h3>{props.titre}</h3>

            <p>Un texte static dans Child 2</p>
            <p>Ci dessous un autre élément dynamique :</p>

            <p>{props.message}</p>
            <hr/>
        </>
    )
}


export const Child3 = function({counter, action}) {
        return(
            <>
                <h3>Compteur : {counter} </h3>
                <p>
                    <button onClick={action}>Increment</button>
                </p>
            </>
        )
}

export const Child4 = function({product}) {

    return (
        <>
            <h3>{product.nom}</h3>
            <p>-- {product.price} € <small>HT</small></p>
            <hr/>
        </>
    )
}