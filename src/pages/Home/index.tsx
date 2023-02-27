import { Card } from "./components/Card"
import { Hero } from "./components/Hero"
import { HomeContainer, CoffeeListContainer, CoffeeList, Tag } from "./styles"
import coffees from "../../coffees"
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
    // const getTotal = (total: number, item: Coffee) =>{
    //     return total + item.amount
    // }
    // const [order, setOrder] = useState([])
    // const totalAmount = order.reduce(getTotal, 0)

    return (
        <HomeContainer>
            <Hero />
            <CoffeeListContainer>
                <h2>Nossos cafés</h2>
                <CoffeeList>
                    {
                        coffees.map(coffee => <Card coffee={coffee} key={coffee.id} />)
                    }
                </CoffeeList>
            </CoffeeListContainer>
        </HomeContainer>
    )
}