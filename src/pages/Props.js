import {Child1, Child2, Child3, Child4} from "../components/Child1";
import {useState} from "react";

const Props = function () {
    const title = 'Les props peuvent venir de constantes';
    const message = 'lorem ipsum abracadabra';

    const [counter, setCounter] = useState(0);

    const product = {
        nom: 'Super Charentaises en moumoute',
        price: 'Pas cher'
    }

    const all_products = [
        {id: 1, nom: 'Pyjama Grenouille', price: 599},
        {id: 2, nom: 'Bigoudis fluos', price: -9}
    ]

    function increment() {
        setCounter(counter + 1)
    }


    return (
        <>
            <h1>Les Props</h1>

            <article>
                <h2>Présentation : Child 1</h2>

                <p>Les props sont un moyen de passer des informations d'un composant parent vers un composant enfant.</p>

                <Child1>Child Component</Child1>
                <Child1>Encore un child component</Child1>
                <Child1>
                    <i>Encore un child componant, </i>
                    <span>mais avec du JSX</span>
                </Child1>

            </article>

            <article>
                <h2>Child 2 : props nommées</h2>

                <Child2
                    titre='Props Titre'
                    message='Un message passé en props'
                />

                <Child2 titre={title} message={message}/>
            </article>

            <article>
                <h2>Valeurs possibles :</h2>

                <p>On peut passer tout type de valeur en props :</p>
                <ul>
                    <li>String</li>
                    <li>JSX</li>
                    <li>Numbers, booleans, undefined</li>
                    <li>Tableaux</li>
                    <li>Objets</li>
                    <li>Fonctions</li>
                    <li>Les valeurs de useState</li>
                </ul>


                <Child3 counter={counter} action={increment}/>

                <Child4 product={product}/>

                {all_products.map(prod =>
                    <Child4 key={prod.id} product={prod}/>
                    )
                }

            </article>

        </>
    )
}

export default Props;