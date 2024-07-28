import { connectToDatabse } from "@/helpers/mongodb";

export default async function handler(req, res){
    if(req.method === 'POST') {
        // Get all request elements
        const { name } = req.body;

        // Verify that all informations are filled
        if (!name) {
            res.status(422).json({
                message: 'Champs du formulaire manquant'
            });
            return;
        }

        // Create new Category object
        const newCategory = { name }

        // MongoDB connection
        let client;
        try {
            client = await connectToDatabse();
        } catch (error) {
            res.status(500).json({
                message: "Impossible d'effectuer la requete"
            });
            return;
        }
        const db = client.db();

        // Insert new Category 
        try{
            await db.collection('Category').insertOne(newCategory);
        } catch (error) {
            client.close();
            res.status(500).json({
                message: 'Un problème est survenu.'
            });
        }

        // Success
        client.close();
        res.status(201).json({
            message: 'Nouvelle catégorie créée',
            category: newCategory
        });
    } else {
        res.status(405).json({
            message: 'Une erreur est survenue.'
        });
    }
}
