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

interface Address {
  cep: string,
  rua: string,
  numero: string,
  complemento?: string,
  bairro: string,
  cidade: string,
  uf: string
}

interface Order {
  id: Date | null,
  coffee: Coffee[],
  address: Address | null,
  payForm: string,
  finishedOrder?: boolean
}

interface OrderContextType {
  order: Order | null,
  coffee: Coffee[]
  getTotalAmountOrder: () => number,
  getTotalAmountPrice: () => number
  addCoffee: (coffeeProps: Coffee, amount: number) => void
  changeAmountCoffeeSelected: (coffeeProps: Coffee, amount: number) => void
  onRemoveCoffeeSelected: (coffeeProps: Coffee) => void,
  finishOrder: (a: Address, p: string) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}


export const OrderContext = createContext({} as OrderContextType)


export const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const [coffee, setCoffee] = useState<Coffee[]>([])

  function getInitialState() {
    const storageStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')
    if (storageStateAsJSON) {
      return JSON.parse(storageStateAsJSON)
    } else {
      return {
        id: null,
        coffee: [],
        address: null,
        payForm: "",
      }
    }
  }

  const [order, setOrder] = useState<Order>(getInitialState)

  function addCoffee(coffeeSelected: Coffee, newAmount: number) {
    if (coffee.find(coffee => coffee.id == coffeeSelected.id)) {

      const coffeeIndex = coffee.findIndex((coffee) => {
        return coffee.id == coffeeSelected.id;
      });

      const tempCoffee = [...coffee]
      tempCoffee[coffeeIndex].amount += newAmount

      setCoffee(tempCoffee)
    } else {
      setCoffee([...coffee, { ...coffeeSelected, amount: newAmount }])
    }

  }

  function changeAmountCoffeeSelected(coffeeSelected: Coffee, newAmount: number) {
    const coffeeIndex = coffee.findIndex((coffee) => {
      return coffee.id == coffeeSelected.id;
    });

    const tempCoffee = [...coffee]
    tempCoffee[coffeeIndex].amount = newAmount

    setCoffee(tempCoffee)
  }

  function getTotalAmountOrder() {
    const getTotal = (total: number, item: Coffee) => {
      return total + item.amount
    }
    const totalAmount = coffee.reduce(getTotal, 0)

    return totalAmount
  }

  function getTotalAmountPrice() {
    const getTotalPrice = (total: number, item: Coffee) => {
      return total + (parseFloat(item.price) * item.amount)
    }
    const totalPrice = coffee.reduce(getTotalPrice, 0)

    return totalPrice
  }

  function onRemoveCoffeeSelected(coffeeSelected: Coffee) {
    const newCoffee = coffee.filter(coffee => coffee.id != coffeeSelected.id)
    setCoffee(newCoffee)
  }

  function finishOrder(data: Address, methodPay: string) {
    setOrder({
      id: new Date(),
      coffee: coffee,
      address: data,
      payForm: methodPay,
      finishedOrder: true
    })

    const stateJSON = JSON.stringify(order)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }

  // function addNewCoffeeInOrder(){
  //   setOrder(state => {
  //     return(
  //       {
  //         id: state.id,
  //         coffee: [...coffee]
  //       }
  //     )
  //   })
  // }

  console.log(coffee)
  return (
    <OrderContext.Provider value={{ order, getTotalAmountOrder, addCoffee, coffee, getTotalAmountPrice, changeAmountCoffeeSelected, onRemoveCoffeeSelected, finishOrder }}>
      {children}
    </OrderContext.Provider>
  )
}