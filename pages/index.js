import { useForm } from 'react-hook-form';

export default function Home() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onFormSubmitHandler = async (data) => {
    // API call 
    const response = await fetch('/api/category/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const fetchedData = await response.json();
    if(response.ok) {
      console.log(fetchedData.message);
    }
  }

  return (
    <>
      <h1>Le Pense-Bête de Beneli</h1>
      <h3>DEV : TO DO</h3>
      <ul>
        <li><strike>Ajouter une Catégorie</strike></li>
        <li><strike>Afficher toutes les catégories</strike></li>
        <li>Supprimer une catégorie</li>
        <li>Ajouter une tâche</li>
        <li>Afficher toutes les tâches</li>
        <li>Supprimer une tâche</li>
        <li>Afficher toutes les tâches d'une catégorie</li>
        <li>Design de l'application (mobile first)</li>
      </ul>

      <form onSubmit={handleSubmit(onFormSubmitHandler)}>
        <h3>Ajouter une catégorie</h3>
        <div>
          <label htmlFor="name">Nouvelle catégorie</label>
          <input
            type="text"
            placeholder="Nom de la catégorie..."
            {...register('name', {
              required: true
            })}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}
