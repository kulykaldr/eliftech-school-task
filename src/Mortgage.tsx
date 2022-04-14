import React from 'react'
import { useState } from 'react'
import { useTypedSelector } from './hooks/useTypedSelector'
import { Bank } from './types'

const Mortgage = () => {
  const { banks } = useTypedSelector(state => state.bank)

  const [initLoan, setInitLoan] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [bank, setBank] = useState<Bank>(banks[0])

  const monthAnnual = bank.InterestRate / 12 / 100
  const monthPow = Math.pow((1 + monthAnnual), bank.LoanTerm)
  const monthlyPayment = (((initLoan - downPayment) * monthAnnual) * monthPow) / (monthPow - 1)

  return (
    <div className="w-25">
      <div className="align-middle input-group">
        <span className="input-group-text">Initial Loan $</span>
        <input
          type="text"
          className="form-control"
          placeholder="Initial Loan"
          value={initLoan}
          onChange={(e) => setInitLoan(Number(e.target.value))}
        />
        {initLoan > bank.MaximumLoan && <div className="alert alert-danger" role="alert">
          Loan is higher than in a bank
        </div>}
      </div>

      <div className="align-middle input-group">
        <span className="input-group-text">Down payment $</span>
        <input
          type="text"
          className="form-control"
          placeholder="Down payment"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
        />
        {downPayment > (initLoan * bank.MinimumDownPayment / 100) && <div className="alert alert-danger" role="alert">
          Minimum down payment is higher than in a bank
        </div>}
      </div>

      <div className="align-middle input-group">
        <span className="input-group-text">Bank</span>
        <select className="form-select"
          onChange={(e) => setBank(banks[Number(e.target.value)])}
        >
          {banks.map(({ BankName }: Bank, index: number) => (
            <option value={index} key={BankName}>{BankName}</option>
          ))}
        </select>
      </div>

      {monthlyPayment > 0 && <div className="alert alert-success" role="alert">
        {monthlyPayment.toLocaleString()}
      </div>}
    </div>
  )
}

export default Mortgage