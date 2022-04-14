import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useActions } from './hooks/useActions'
import { Bank } from './types'
import strToHash from './strToHash'

const BankForm: React.FC<{ bank: Bank }> = ({ bank }) => {
  const { addBankAction, editBankAction } = useActions()
  const { register, handleSubmit, reset, setValue, getValues, formState: { errors } } = useForm()

  useEffect(() => {
    if (bank.ID !== 0) {
      setValue('BankName', bank.BankName)
      setValue('InterestRate', bank.InterestRate)
      setValue('LoanTerm', bank.LoanTerm)
      setValue('MaximumLoan', bank.MaximumLoan)
      setValue('MinimumDownPayment', bank.MinimumDownPayment)
    }
  }, [bank, setValue])

  const onSubmit = handleSubmit(() => {
    const bankName = getValues('BankName')
    const interestRate = getValues('InterestRate')
    const loanTerm = getValues('LoanTerm')
    const maximumLoan = getValues('MaximumLoan')
    const minimumDownPayment = getValues('MinimumDownPayment')

    const id = bank.ID === 0 ? strToHash(bankName) : bank.ID

    const bankNew: Bank = {
      ID: id,
      BankName: bankName,
      InterestRate: interestRate,
      LoanTerm: loanTerm,
      MaximumLoan: maximumLoan,
      MinimumDownPayment: minimumDownPayment,
    }

    if (bank.ID === 0) {
      addBankAction(bankNew)
    } else {
      editBankAction(bankNew)
    }

    reset()
  })


  return (
    <form onSubmit={onSubmit}>
      <div className="align-middle input-group">
        <span className="input-group-text">Bank Name</span>
        <input
          type="text"
          className="form-control"
          placeholder="Bank name"
          {...register('BankName', { required: 'This is required', minLength: { value: 2, message: 'Must be more than 2 characters long' } })} />
        <ErrorMessage errors={errors} name="BankName" as="p" style={{ color: 'red' }} />

        <span className="input-group-text">Interest Rate %</span>
        <input
          type="text"
          className="form-control"
          placeholder="Interest Rate"
          {...register('InterestRate', { required: 'This is required' })} />
        <ErrorMessage errors={errors} name="InterestRate" as="p" style={{ color: 'red' }} />

        <span className="input-group-text">Maximum Loan $</span>
        <input
          type="text"
          className="form-control"
          placeholder="Maximum Loan"
          {...register('MaximumLoan', { required: 'This is required' })} />
        <ErrorMessage errors={errors} name="MaximumLoan" as="p" style={{ color: 'red' }} />
      </div>

      <div className="align-middle input-group">
        <span className="input-group-text">Minimum Down Payment $</span>
        <input
          type="text"
          className="form-control"
          placeholder="Minimum Down Payment"
          {...register('MinimumDownPayment', { required: 'This is required' })} />
        <ErrorMessage errors={errors} name="MinimumDownPayment" as="p" style={{ color: 'red' }} />

        <span className="input-group-text">Loan Term months</span>
        <input
          type="text"
          className="form-control"
          placeholder="Loan Term"
          {...register('LoanTerm', { required: 'This is required' })} />
        <ErrorMessage errors={errors} name="LoanTerm" as="p" style={{ color: 'red' }} />

        <input type="submit" className="btn btn-primary" value="Add" />

      </div>
    </form>
  )
}

export default BankForm