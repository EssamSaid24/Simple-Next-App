import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {ninjas:data}
    }
}



const Index = ({ninjas}) => {
    return (
        <>
            <h1>Essam ninja</h1>
            {ninjas.map(ninja =>(
                <Link  className="btn" href={'/ninjas/' + ninja.id} key={ninjas.id}>
                        <h3>{ninja.name}</h3>
                </Link>
            ))}
        </>
    );
}

export default Index;
