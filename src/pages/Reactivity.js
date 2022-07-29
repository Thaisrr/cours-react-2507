import { useState } from "react";

const Reactivity = function() {

    let counter = 0;

    //const state = useState(10); // Je créé un hook d'effet 0
    //const counter2 = state[0]; // [0] -> premier élément d'un tableau
    //const setCounter = state[1]; // La deuxième valeur retournée est une fonction

    const [counter2, setCounter2] = useState(10);
    const [fruits, setFruits ] = useState(['pomme', 'mangue']);

    const [game, setGame] = useState({title: 'thé ouicheur', type: 'rpg', studio: 'CD Projekt'});

    const [jeux, setJeux] = useState([
        {id: 1, title: 'thé ouicheur 1', type: 'rpg', studio: 'CD Projekt'},
        {id: 2, title: 'thé ouicheur 2', type: 'rpg', studio: 'CD Projekt'},
        {id: 3, title: 'thé ouicheur 3', type: 'rpg', studio: 'CD Projekt'},
        {id: 4, title: 'thé ouicheur 4', type: 'rpg', studio: 'CD Projekt'},
        ])


    function incrementBis() {
        const new_value = counter2 + 1;
        setCounter2(new_value);
        console.log('Counter 2 :', counter2 )
    }


    function boom(event) { 
        console.log(event);
        alert('Boom !')
    }

    function paramFunc(param) {
        console.log('Votre paramètre : ', param);
    }

    function increment() {
       counter++;
       console.log(counter);
    }

 
    function addFruit(new_fruit) {
       // const copy = fruit; -> pas une vrai copie !!!
        //const copy = [...fruits]; // Copie via décomposition
      //  const copy = Array.from(fruits);  // Copie de tableau
      //  copy.push(new_fruit)
      //  setFruits(copy);
        setFruits([...fruits, new_fruit]) // version rapide avec decomposition
    }

    function modifyTitle() {
      //  const copy = {...game};
      //  copy.title = 'The Witcher';
      //  setGame(copy);

        setGame({...game, title: 'The Witcher' })
    }

    function upperFruit(index) {
        const copy = [...fruits];
        copy[index] = copy[index].toUpperCase();
        setFruits(copy)
    }

    function upperJeu(index) {
        const copy = [...jeux];
        copy[index].title = copy[index].title.toUpperCase();
        setJeux(copy)
    }
   


    return (
        <>
            <h1>Réactivité</h1>

            <article>

                <h2>Evénements</h2>

                <p>En React, pour gérer les événements, on utilise la syntaxe d'attributs HTML : 
                    onClick, onSubmit, onMouseOver, ...
                </p>
                <p>Entre accolade, on passe une callback, qui prend en paramètre l'événement. 
                    (comme dans un addEventListener )
                </p>
                <p>React va recréer un addEventListener, Pour le bouton suivant : </p>
                <p><code>{"<button onClick={(e) => console.log('Coucou')}>Cliquez plutôt ici !</button>"}</code></p>
                <p>React traduira en JS : </p>
                <p><code>
                    button.addEventListener('click', function(e) {"{ console.log('Coucou')}"})
                </code></p>

                <p>
                    <button onClick={boom}>Ne cliquez pas ici !</button>
                    <button onClick={(e) => console.log('Coucou')}>Cliquez plutôt ici !</button>
                </p>

                <h3>Gérer les paramètres</h3>

                <p>Si la fonction / l'action qu'on souhaite réaliser suite à un événement à besoin de paramètres, 
                    on doit passer par une fonction qui appelle notre fonction.
                </p>
        
                <p>Exemple avec une fonction fléchée :</p>
                <p>
                    <code>
                        {" <button onClick={() => maFonction('mon parametre') }>Click</button>"}
                    </code>
                </p>
                <p>Exemple avec une fonction anonyme :</p>
                <p>
                    <code>
                        {" <button onClick={function() { maFonction('mon parametre') } }>Click</button>"}
                    </code>
                </p>


                <p>
                    <button onClick={() => paramFunc('Parametre 1') }>paramètre 1</button>
                    <button onClick={function() { paramFunc('Parametre 2') }}>paramètre 2</button>
                </p>

            </article>


            <article>

                <h2>Manipuler les valeurs</h2>

                <h3>Fonctionnement en JS : </h3>

                <p>Valeur du compteur : {counter}</p>

                <p>
                    <button onClick={increment}>Incrémenter</button>
                </p>


                <h3>La magie de React : le Hook d'état</h3>

                <p>Compteur ( useState ) : {counter2} </p>

                <p>
                    <button onClick={incrementBis}>Incrémenter</button>
                </p>

                <h3>UseState avec les tableaux</h3>

                <p>Mes fruits :</p>
                   
                <p>
                    <button onClick={() => addFruit('poire')}>🍐</button>
                    <button onClick={() => addFruit('raisin')}>🍇</button>
                    <button onClick={() => addFruit('ananas')}>🍍</button>
                    <button onClick={() => addFruit('pasteque')}>🍉</button>
                    <button onClick={() => addFruit('orange')}>🍊</button>
                    <button onClick={() => addFruit('citron')}>🍋</button>
                    <button onClick={() => addFruit('coing')}>🍈</button>
                    <button onClick={() => addFruit('fraise')}>🍓</button>
                    <button onClick={() => addFruit('noix de coco')}>🥥</button>
                    <button onClick={() => addFruit('cerise')}>🍒</button>
                    <button onClick={() => addFruit('tomate')}>🍅</button>
                    <button onClick={() => addFruit('kiwi')}>🥝</button>
                </p>

                <ul>
                    {fruits.map(function(f, i) {return (
                        <li key={f}
                            onClick={() => upperFruit(i)}
                        >
                            {f}
                        </li>
                    )})}
                </ul>

                <h3>UseState avec un objet</h3>

                <p>{JSON.stringify(game)}</p>

                <p>
                    <button onClick={modifyTitle}>Corriger le titre</button>
                </p>


                <h3>Tableau d'objets</h3>

                <ul>
                    {jeux.map((jeu, index) => (
                        <li key={jeu.id} onClick={() => upperJeu(index)}>
                            {jeu.title}, par {jeu.studio}
                        </li>
                    ))}
                </ul>

            </article>
        </>
    )
}

export default Reactivity;