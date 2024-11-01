import { useState } from "react";
import PokemonItem from "./components/PokemonItem";
import React from 'react'


export default function SearchBar() {

    const [search, setSearch] = useState('')
    console.log(search)


    return (
        <div>
            <Form>
                <InputGroup>
                    <Form.Control onChange={(e) => setSearch(e.targe.value)} placeholder='Search' />
                </InputGroup>
            </Form>


        </div>

    )
}
