export const getStaticPaths = async () =>{
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(ninja =>{
    return{
        params: {id: ninja.id.toString()}
    }
})
// Error: Invalid value returned from getStaticPaths in /ninjas/[id]. Received undefined Expected: { paths: [], fallback: boolean }
    return{
        paths,
        fallback: false // access a user id that is not found 

    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res  = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return{
        props:{ninja:data}
    }
}


const Id = ({ninja}) => {
    return (
        <>
        <h1>Details</h1>
        <h2>{ninja.name}</h2>
        <p>{ninja.email}</p>
        </>
    );
}

export default Id;
