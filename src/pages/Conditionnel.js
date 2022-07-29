const Conditionnel = function() {
    const message = "Dans les JSX, on peut interpréter du JS dans des {}";
    const is_logged = false;
    let data; // retourne falsy si testé
    let age;


    console.log(!!age);


    function getMessage() {
        return (
            <>
                <p>Il est tout à fait possible d'utiliser des fonctions pour récupérer du JSX</p>
                <p>Attention, la fonction doit retourner ( return ) du JSX pour que ça fonctionne !</p>
                <p>On peut utiliser la fonction entre accolade : {" {getMessage()} "}</p>
            </>
        )
    }

    function MessageBis() {
        return (
            <> {/* Un commentaire */}
                <p>On peut utiliser la fonction comme un composant : { '<MessageBis/>'}</p>
                <p>Dans ce cas, la fonction doit commencer par une majuscule.</p>
                <p>La fonction est, dans ce cas, un composant dans un composant.</p>
            </>
        )
    }

    function Food() {
        const now = new Date(); // Date et heure actuel
        const hour = now.getHours(); // Récupérer les heures

        if(hour >= 6 && hour < 11) {
            return <p>Breakfast time!</p>
        } 
        
        if (hour >= 11 && hour < 12 ) {
            return <p>Brunch time !</p>
        }

        if(hour >= 12 && hour < 14) {
            return <p>Lunch time !</p>
        }

        if(hour >= 14 && hour < 18) {
            return <p>Gouter time !</p>
        }

        if(hour >= 18 && hour < 20) {
            return <p>Diner time !</p>
        }

        return <p>Souper time !</p>

    }

    

    return (
        <>
            <h1>Affichage Conditionnel</h1>
            <article>
                <h2>Rappels</h2>
                <p>{message}</p>
                {getMessage()}
                <MessageBis/>
              
            </article>
            <article>
             
                <h2>Si... Sinon</h2>

                <p>Dans le cas d'un texte simple, on peut utiliser le ternaire</p>

                <p>Votre statut : { (is_logged)? 'Connecté·e' : 'Hors Ligne' }</p>

                {(is_logged)? 
                    <p>Paragraphe pour dire que vous êtes connecté</p> 
                    :
                    <p>Paragraphe pour dire hors ligne</p>
                }

                <p>On peut utiliser le ternaire si on a deux choix de valeur, à afficher
                    en fonction d'une condition. 
                </p>
                <p> Ces valeurs peuvent être du texte, du JSX, des composants, ou un mixte.</p>


                {(data)?
                    <p>{data}</p>
                    :
                    <p>La variable "data" est vide.</p>
                }
            </article>

            <article>

                <h2>Si... alors</h2>

                <p>Dans certain cas, on peut vouloir afficher quelque chose si une condition est vrai, 
                    mais ne rien faire si elle est fausse. ( ou le contraire )
                </p>

                <h3>Si is_logged est falsy, alors...</h3>

                <p>Dans le cas d'une condition avec un "OU" ou ||, on souhaite que l'une ou l'autre
                    des opérations retourne vrai, pour que l'ensemble retourne "true".
                </p>
                <p>Exemple : </p>
                <ul>
                    <li>
                        <b>{ '(10 < 20 || 20 > 50)' } </b> : comme la première partie de la condition est <i>true</i>,
                            JS ne lira pas la deuxième partie, c'est inutile, puisqu'on a besoin qu'une seule des deux soit vrai.
                     </li>
                     <li>
                        <b>{ '(20 > 50 || 20 > 10)' }</b> : ici, la première partie de la condition est fausse, donc JS devra tester la seconde partie. 
                     </li>
                </ul>

                <p>Pour assigner une valeur à une variable, dans le cas ou cette variable est falsy, on peut écrire : </p>
                <p>
                    <code>ma_variable = ma_variable || 'valeur par défaut'</code>
                </p>

                <p>Sur ce principe, on peut afficher du JSX ( ou du texte, ou un composant ) seulement si une condition est falsy.</p>
                <p><code>{ '{ is_logged || <p>Veuillez vous connecter</p> }' }</code></p>

               {  is_logged || <p>Veuillez vous connecter</p> }



               <h3>Si is_logged est truthy... alors</h3>

               <p>Dans une condition avec un ET ou &&, les deux parties de la condition doivent être vraies.</p>
               <p>Exemple :</p>
               <ul>
                <li>
                    <b>{ '5 > 10 && 10 < 20 '}</b> : ici, la première partie de la condition est fausse, donc dans tous les cas,
                    la condition finale sera fausse. JS ne lira pas la deuxième partie de la condition.
                </li>
                <li>
                    <b>{ '5 < 10 && 10 < 20 '}</b> : ici, la première partie de la condition est vrai, donc JS lira la deuxième partie 
                    quoi qu'il arrive.
                </li>
               </ul>

               <p>Pour assigner une valeur à une variable uniquement si cette variable est truthy, on peut faire :</p>
               <p><code>ma_variable = ma_variable && 'Nouvelle valeur'</code></p>

                <p>Sur ce principe, dans le JSX :</p>
                <p><code>{ '{is_logged && <p>Bonjour utilisateur·trice connecté·e ! </p>}'}</code></p>
                {is_logged && <p>Bonjour utilisateur·trice connecté·e ! </p>}


                <h3>Si pas d'age donnée alors...</h3>

                <p>Les valeurs falsy sont : </p>
                <ul>
                    <li>null</li>
                    <li>undefined</li>
                    <li>NaN ( Not a number )</li>
                    <li>Empty string : "" ou '' ou ``</li>
                    <li>false</li>
                    <li>0 ( zéro )</li>
                </ul>

                <p>Si on veut uniquement tester si une valeur est undefined ou null, mais pas falsy,
                     on utilise l'opérateur ?? ou <i>Nullish Coalescing operateur</i>
                 </p>

                 <p>Pour assigner une valeur à une variable uniquement si celle ci est null ou undefined :</p>

                 <p><code>ma_variable = ma_variable ?? 'valeur par défaut'</code></p>

                 <p>Dans le JSX, ça donne :</p>

                 <p><i>Pour afficher la valeur si elle existe, sinon afficher l'autre valeur</i></p>
                 <p><code>{ "{age ?? <p>Aucun âge n'a été fourni.</p>} "}</code></p>
                { age ?? <p>Aucun âge n'a été fourni.</p>}

                <p><i>Pour afficher uniquement le message "d'erreur" :</i></p>
                <p><code>{"{  (age === undefined || age === null ) && <p>Aucun âge n'a été fourni.</p>}"}</code></p>
                { (age === undefined || age === null ) && <p>Aucun âge n'a été fourni.</p>}

            </article>


            <article>
                <h2>Si... sinon si... sinon...</h2>

                <p>Pour les conditions plus complexes, ou pour rendre son code plus lisible, il faut utiliser une fonction
                    ou un autre composant ( même interne );
                </p>

                <p>Retour de la fonction / composant Food :</p>
                <Food/>

            </article>


            
        </>
    )
}

export default Conditionnel;