import { connectToDatabse } from "@/helpers/mongodb"

export default function Categories(props) {
    return(
        <>
            <h1>Les catégories</h1>
            <ul>
                { props.categories.map((category) => (
                    <li key={category._id}>{category.name}</li>
                )) }
            </ul>
        </>
    );
}

export async function getStaticProps() {
    let categories;

    try{
        const client = await connectToDatabse();
        const db = client.db();

        categories = await db
            .collection('Category')
            .find()
            .sort({ name: 'asc' })
            .toArray();
    } catch (error) {
        console.log(error)
        categories = []
    }

    return {
        props: {
            categories: JSON.parse(JSON.stringify(categories)),
        },
        revalidate: 3600,
    };
}
