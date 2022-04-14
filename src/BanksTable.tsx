import React from 'react'
import { useState } from 'react'
import BankForm from './BankForm'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'
import { Bank } from './types'

const BanksTable = () => {
  const { deleteBankAction } = useActions()
  const { banks } = useTypedSelector(state => state.bank)

  const [currBank, setCurrBank] = useState<Bank>({
    ID: 0,
    BankName: '',
    InterestRate: 0,
    MaximumLoan: 0,
    MinimumDownPayment: 0,
    LoanTerm: 0,
  })

  return (
    <main className="container">
      <BankForm bank={currBank} />

      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Bank name</th>
            <th scope="col">Interest rate</th>
            <th scope="col">Maximum loan</th>
            <th scope="col">Minimum down payment</th>
            <th scope="col">Loan term</th>
            <th scope="col"> </th>
          </tr>
        </thead>

        <tbody>
          {banks.map((item: Bank, index: number) => (
            <tr key={item.BankName}>
              <th scope="row">{index + 1}</th>
              <td>{item.BankName}</td>
              <td>{item.InterestRate}%</td>
              <td>${item.MaximumLoan.toLocaleString()}</td>
              <td>${item.MinimumDownPayment}%</td>
              <td>{item.LoanTerm} months</td>
              <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" className="btn btn-warning" onClick={() => setCurrBank(item)}>Edit</button>
                  <button type="button" className="btn btn-danger" onClick={() => deleteBankAction(item)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default BanksTable