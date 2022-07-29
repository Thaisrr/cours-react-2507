const Routing = () => (
    <>
        <h1>Le Router</h1>

        <article>
            <h2>Installation : </h2>

            <p>Installer la librairie : </p>
            <p><code>npm i react-router-dom</code></p>
        </article>

        <article>
            <h2>Configuration</h2>

            <p>Dans App.js, on met une balise {'<'}BrowserRouter{'>'} autour de l'intégralité du contenu.</p>

            <p>A l'endroit où on souhaite afficher les pages, on met une balise {'<'}Routes{'>'} 
            qui contient une liste de routes.</p>
            <p>Ces routes se définissent dans des balises {'<'}Route{'>'} ( au singulier ), et contiennent :</p>
            <ul>les attributs :
                <li>path : une chaîne de caractère commence par un /, et contient le chemin qu'on veut donné au composant</li>
                <li>element: la balise du componsant visé( entre accolades )</li>
            </ul>
        </article>

        <article>
            <h2>Les liens</h2>

            <p>Les liens se font avec la balise NavLink, qui est composant à importer de react-router-dom.</p>
            <p>Les chemins se passent via un attribut <b>to</b>, et non href.</p>
            <p>Ces composants sont transformés en <i>a</i> à la compilation.</p>
            <p>Le router ajoute automatiquement une classe "active", et aria-current sur les liens dont le "to" correspond à l'URL actuelle.</p>
        </article>
    </>
);

export default Routing;