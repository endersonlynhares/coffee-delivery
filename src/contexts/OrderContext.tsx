import { ReactNode, createContext, useState } from "react";


interface Coffee {
  id: string,
  title: string,
  tags: string[],
  description: string,
  srcImg: string,
  price: string,
  amount: number
}

interface Order{
  id: Date | null,
  coffee: Coffee[] 
}

interface OrderContextType {
  order: Order | null,
  coffee: Coffee[] 
  getTotalAmountOrder: () => number,
  getTotalAmountPrice: () => number 
  addCoffee: (coffeeProps: Coffee, amount: number) => void 
  changeAmountCoffeeSelected: (coffeeProps: Coffee, amount: number) => void
  onRemoveCoffeeSelected: (coffeeProps: Coffee) => void

}

interface OrderContextProviderProps {
  children: ReactNode
}


export const OrderContext = createContext({} as OrderContextType)


export const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const [coffee, setCoffee] = useState<Coffee[]>([])

  const [order, setOrder] = useState<Order>({
    id: null,
    coffee: []
  })
  
  function addCoffee(coffeeSelected: Coffee, newAmount: number){
    if(coffee.find(coffee => coffee.id == coffeeSelected.id)){

      const coffeeIndex = coffee.findIndex((coffee) => {
        return coffee.id == coffeeSelected.id;
      });

      const tempCoffee = [...coffee]
      tempCoffee[coffeeIndex].amount += newAmount

      setCoffee(tempCoffee)
    }else{
      setCoffee([...coffee, {...coffeeSelected, amount: newAmount}])
    }
      
  }

  function changeAmountCoffeeSelected(coffeeSelected:Coffee, newAmount: number){
    const coffeeIndex = coffee.findIndex((coffee) => {
      return coffee.id == coffeeSelected.id;
    });

    const tempCoffee = [...coffee]
    tempCoffee[coffeeIndex].amount = newAmount

    setCoffee(tempCoffee)
  }
 
  function getTotalAmountOrder(){
    const getTotal = (total: number, item: Coffee) =>{
      return total + item.amount
    }
    const totalAmount = coffee.reduce(getTotal, 0)

    return totalAmount
  }

  function getTotalAmountPrice(){
    const getTotalPrice = (total: number, item: Coffee) =>{
      return total + (parseFloat(item.price) * item.amount )
    }
    const totalPrice = coffee.reduce(getTotalPrice, 0)

    return totalPrice
  }

  function onRemoveCoffeeSelected(coffeeSelected: Coffee){
    const newCoffee = coffee.filter(coffee => coffee.id != coffeeSelected.id)
    setCoffee(newCoffee)
  }
  
 

  console.log(coffee)
  return (
    <OrderContext.Provider value={{order, getTotalAmountOrder, addCoffee, coffee, getTotalAmountPrice, changeAmountCoffeeSelected, onRemoveCoffeeSelected}}>
      {children}
    </OrderContext.Provider>
  )
}