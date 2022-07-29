const Presentation = function() {

    const message = 'Vive les JSX !';
    const jsx = <span>Je suis du JSX</span>;
    const image_url = "https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif";
    const color = "red";

    const image = {
        url: 'https://m.media-amazon.com/images/I/912htUd6agL._SS500_.jpg',
        title: 'Space Sheep',
        alt: 'Un mouton dans l\'espace',
        link : <a href="https://www.dawan.fr">Coucou</a>
    };


    const style = {
        color,
        fontFamily: 'serif',
        border: 'solid 1px orange',
        fontSize: '20px'
    }



    return (
        <>
            <h1 id="coucou">Présentation</h1>
            
            <article>
                <h2>Les JSX</h2>

                <p>JSX : Javascript XML</p>

                <p>Le JSX est une extension syntaxique de JS : ce n'est ni une string ni du HTML.</p>

                <p>Comme c'est du XML, il y a des normes à respecter : les balises orphelines doivent être refermées.</p>
                <p>Les composants ne peuvent retourner qu'un block de JSX : le template retourné par le composant doit être
                    encapsulé dans une unique balise.
                </p>
                <p>Cette balise à la racine peut être une balise existante en HTML, ou une balise vide, sans nom, 
                    qui ne sera rendue dans le HTML.
                </p>
                <p>En JSX, on peut utiliser les balises existantes en HTML, ou les composants qu'on a importé.</p>

                <p>On utilise des majuscules dans les noms des composants et les balises des composants pour
                    les différencier des balises html classique.
                </p>
                
            </article>

            <article>
                <h2>L'interpolation</h2>

                <p>En JSX, on peut interpréter du JS dans le template, c'est l'interpolation.</p>

                <ul>
                    <li>Opération : 1 + 1 = {1 + 1}</li>
                    <li>Variables : {message}</li>
                    <li>String : { 'Je suis une string'}</li>
                    <li>JSX : {jsx}</li>
                </ul>

                <p>Attention, certains caractères sont réservés et ne peuvent donc pas être utilisés tel quel dans le JSX</p>
                <p>Pour les afficher, il faut les échapper.</p>
                <p>C'est le cas des accolades : { '{}' }</p>
                <p>Et des crochets : { '<>' }</p>
                <p>Pour les afficher, il faut les interpréter en tant que string JS.</p>
            
            </article>


            <article>

                <h2>Attributs HTML</h2>

                <p>Les JSX sont plus proche du JS que de la string : les mots clefs réservés en JS ne peuvent pas être 
                    utilisés comme attributs dans les balises. (En temps que texte de balise, si.)
                </p>

                <ul className="liste">
                    <li>class: className</li>
                    <li>for: htmlFor</li>
                    <li>tabindex : tabIndex</li>
                </ul>

                <p>Les attributs peuvent prendre en valeur une string, entre "" comme en HTML : id="monid"</p>
                <p>Mais ils peuvent aussi interpréter du JS, grâce aux accolades.</p>

                <div className={color}>
                    <img src={image_url} alt=""/>
                </div>

                <figure>
                    <img src={image.url} alt={image.alt}/>
                    <figcaption>{image.title}</figcaption>
                </figure>


                <ul>
                    <li>Style : <span style={ {color: 'blue'} }>I'm blue !</span></li>
                    <li>Style avec valeur calculée : <span style={ {color: color} }>Coloré depuis la constante "color"</span></li>
                    <li>Style avec un objet : <span style={style}>I'm so stylish !</span></li>
                </ul>


            </article>

            <article>

                <h2>Style CSS</h2>

                <p>On peut faire autant de fichier CSS qu'on le souhaite.</p>
                <p>On doit importer ces fichiers dans les composants correspondants.</p>
                <p>Le style n'est pas cloisonné, le style d'un composant peut s'appliquer à d'autres.</p>

                <p>Il existe déjà des fichiers CSS : index.css, et App.css</p>
                <p>De manière général, on utilise index.css pour le style très global, App pour le style général,
                    et on créé ensuite des fichiers css pour le style spécifique d'un composant.
                </p>

            </article>

            <article>
                <h2>Images</h2>

                <p>Les images utilisées en <b>CSS</b> se mettent dans le <b>dossier .src</b></p>
                <p>Pour faire le chemin, on écrit le chemin tel qu'il est : depuis le fichier css, vers l'image.</p>

                <p>React modifie dynamiquement ces liens lors de la compilation, pour qu'ils correspondent 
                    à l'architecture du dossier compilé.
                </p>

 
                <p>Dans le JSX, React réécrit toutes les attributs passés tels quels, tels qu'on les a fournis.</p>

                <p>Les JSX sont injectés dans le fichier index.html, tels qu'on les a rédigés.</p>
                <p>Les Images et médias utilisés doivent donc être placés dans le <b>dossier public, et le chemin
                    écrit comme si on se trouvait dans le fichier index.html</b>, et ce quelque soit le composant dans lequel on se situe.
                </p>





            </article>


        </>
  
    )
}

export default Presentation;