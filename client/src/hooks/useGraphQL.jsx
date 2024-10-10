import { useEffect, useState } from "react";

const useGraphQL = (query) => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://beta.pokeapi.co/graphql/v1beta', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "query": query,
                "variables": null,
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setData(data)
            })


    }, [query]
    )

    return { data }
}

export default useGraphQL;