import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000 )

        }, []);





    return (
        <div>
            <h1>Error 404</h1>
        </div>
    );
}

export default Error;
