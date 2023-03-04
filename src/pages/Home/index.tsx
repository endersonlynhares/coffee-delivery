import { Card } from "./components/Card"
import { Hero } from "./components/Hero"
import { HomeContainer, CoffeeListContainer, CoffeeList, Tag } from "./styles"
import coffees from "../../coffees"
import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"
// import { useState } from "react"

interface Coffee {
    id: string,
    title: string,
    tags: string[],
    description: string,
    srcImg: string,
    price: string,
    amount: number
}

export const Home = () => {


    return (
        <HomeContainer>
            <Hero />
            <CoffeeListContainer>
                <h2>Nossos cafés</h2>
                <CoffeeList>
                    {
                        coffees.map(coffee => <Card coffeeProps={coffee} key={coffee.id} />)
                    }
                </CoffeeList>
            </CoffeeListContainer>
        </HomeContainer>
    )
}