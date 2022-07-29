import {useState} from "react";
import {useForm} from "react-hook-form";

const Formulaires = function() {

    const [validator, setValidator] = useState({
        plat: {
            is_error: false,
            message: 'Veuillez entrer un plat',
        },
    })

    const [food, setFood] = useState('');

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    function saveFood(event) {
        event.preventDefault();
        console.log('Value ', event.target[0].value);
        console.log('Value ', event.target.food.value);

        setFood(event.target.food.value);
    }

    function saveUser(user) {
        console.log('Saving user : ', user);
        alert(`${user?.firstname} ${user?.name} inscrit.e avec succès !`)
        reset();
    }

    function saveOrder(event) {
        const form = event.target;
        event.preventDefault();
        const order = {};

        for(let input of form) {
            if(input.name) {
                if(errors[input.name]) {
                    const changed_error = {...validator[input.name]};
                    changed_error.is_error = !input.value;
                    setValidator({...validator, [input.name]: changed_error})
                }
                order[input.name] = input.value;
            }
        }
        console.log(order)
    }



    return (
        <>
            <h1>Les Formulaires</h1>

            <article>
                <h2>Formulaire Simple</h2>

                <p>Plat préféré : {food}</p>

                <form onSubmit={saveFood}>
                    <div>
                        <label htmlFor='food'>Plat:</label>
                        <input id='food' name='food'/>
                    </div>
                    <button>Enregistrer</button>
                </form>

            </article>

            <article>
                <h2>Formulaire Complexe</h2>

                <form onSubmit={saveOrder}>
                    <div>
                        <label htmlFor='plat'>Plat</label>
                        <input id='plat' name='plat'/>
                        {validator.plat.is_error && <p>{errors.plat.message}</p>}
                    </div>
                    <div>

                        <label htmlFor='quantity'>Quantité</label>
                        <input id='quantity' name="quantity" type='number'/>
                    </div>
                    <div>
                        <label htmlFor='dessert'>Dessert</label>
                        <select id='dessert' name='dessert'>
                            <option value=''>---Choisir un dessert</option>
                            <option value='tiramisu'>Tiramisu de Mamie</option>
                            <option value='fruits'>Salade de fruits</option>
                            <option value='glace'>Glace à l'italienne</option>
                        </select>
                    </div>
                    <div>
                        <button>Commander</button>
                    </div>
                </form>
            </article>


            <article>
                <h2>React Hook Form </h2>

                <form onSubmit={handleSubmit(saveUser)}>
                    <div>
                        <label htmlFor='nom'>Nom</label>
                        <input id='nom' {...register('name', {
                            required: 'Veuillez entrer un nom',
                            minLength: {value: 2, message: 'Votre nom est trop court ( minimum de 2 caractères )' }
                        })}/>
                        <p className='error'>{errors.name?.message}</p>
                    </div>
                    <div>
                        <label htmlFor='prenom'>Prénom</label>
                        <input id='prenom' {...register('firstname', {required: true})}/>
                        {errors.firstname && <p className='error'>Veuillez entrer un prénom</p>}
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input id='email' {...register('email', {required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
                        {(errors.email && errors.email.type === 'required') && <p className='error'>Vous devez entrer une addresse mail</p>}
                        {(errors.email && errors.email.type === 'pattern') && <p className='error'>Votre email est invalide</p>}
                    </div>
                    <div>
                        <label htmlFor='title'>Titre</label>
                        <select id='title' {...register('title')}>
                            <option value='emperess'>Empereur / Impératrice</option>
                            <option value='jedi'>Maître·sse Jedi </option>
                            <option value='sith'>Sith</option>
                            <option value='unicorn'>Dompteur·se de Licornes</option>
                        </select>

                        <fieldset>
                            <legend>Pronoms</legend>

                            <div>
                                <label htmlFor='p1'>She / Her</label>
                                <input id='p1' type='radio' value='she' {...register('pronouns')}/>
                            </div>
                            <div>
                                <label htmlFor='p2'>He / Him</label>
                                <input id='p2' type='radio' value='he' {...register('pronouns')}/>
                            </div>
                            <div>
                                <label htmlFor='p3'>Them / They</label>
                                <input id='p3' type='radio' value='they' {...register('pronouns')}/>
                            </div>
                        </fieldset>

                        <div>
                            <label htmlFor='staylog'>Rester connecté·e ?</label>
                            <input id='staylog' type="checkbox" {...register('stay_logged')}/>
                        </div>


                    </div>
                    <p>
                        <button>Inscription</button>
                    </p>
                </form>
            </article>
        </>
    )
}

export default Formulaires;