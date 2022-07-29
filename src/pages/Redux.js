import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount} from "../store/counterSlice";

const Redux = function () {

    const count = useSelector(state => state?.counter.value)
    const dispatch = useDispatch();

    return(
        <>
            <h1>Redux</h1>

            <article>
                <h2>Présentation</h2>

                <h3>Définition</h3>
                <p>Les stores sont un type de design pattern, d'architecture d'application, permettant de gérer les données.</p>

                <p>Ils permettent de gérer les données à travers différents stades :</p>
                <ul>
                    <li>L'état de la donnée : initialState = état initial</li>
                    <li>Les actions possibles sur la donnée  = actions</li>
                    <li>Les modifications des données = dispatch</li>
                </ul>

                <p>Le but est de centraliser la gestion de certaines données utilisées à plusieurs niveaux de l'application.</p>
                <p>Le store garantit l'authenticité des données, à tout moment, et n'importe ou dans l'application.</p>

                <h3>Installation : </h3>

                <p>Installation du core général de Redux, et les outils :</p>
                <p><code>npm i @reduxjs/toolkit</code></p>

                <p>Installation de React Redux :</p>
                <p><code>npm i react-redux</code></p>
            </article>

            <article>
                <h2>Utilisation</h2>

                <p>Mon compteur : {count}</p>

                <div>
                    <button onClick={() => dispatch(increment())}>🔼</button>
                    <button onClick={() => dispatch(decrement())}>🔽</button>
                    <button onClick={() => dispatch(incrementByAmount(10))}>➕10</button>
                </div>
            </article>

        </>
    )
}
export default Redux;