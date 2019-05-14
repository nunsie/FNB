type Auth = {
  username: string
  password: string
}

type Card = {
  holder: string
  number: string
  type: string
  status: string
  expiry: string
}

type Transaction = {
  date: Date
  description: string
  reference: string
  fee: number
  amount: number
  balance: number
}

type Payment = {
  date: Date
  name: string
  number: string
  reference: string
  amount: number
  status: string
}
