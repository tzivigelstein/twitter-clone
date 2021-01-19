import React, { useState, useContext, useEffect } from 'react'
import { FormContainer, Form, InputContainer, Border, InputHelper, Input } from './Globals'
import styles from './form.module.css'
import authContext from '../context/auth/authContext'
import styled from '@emotion/styled'

const NormalizedInputContainer = styled(InputContainer)`
  padding-right: 0;
  padding-left: 0;
`

const EmailOrPhone = styled.div`
  margin-top: 15px;
  span {
    color: #1da0f2;
    font-size: 15px;
    cursor: pointer;
  }
`

const AgeContainer = styled.div`
  margin-top: 30px;
`

const AgeHelperTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  line-height: 0.5;
`
const AgeHelper = styled.span`
  font-size: 15px;
  color: #8899a6;
  line-height: 0.5;
`

const SelectContainer = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const SelectorContainer = styled.div`
  display: flex;
`

const LoginForm = ({ isDisabled }) => {
  const MONTHS = [
    { month: 'January', code: 'JAN' },
    { month: 'February', code: 'FEB' },
    { month: 'March', code: 'MAR' },
    { month: 'April', code: 'APR' },
    { month: 'May', code: 'MAY' },
    { month: 'June', code: 'JUN' },
    { month: 'July', code: 'JUL' },
    { month: 'August', code: 'AUG' },
    { month: 'September', code: 'SEP' },
    { month: 'October', code: 'OCT' },
    { month: 'November', code: 'NOV' },
    { month: 'December', code: 'DEC' },
  ]

  const dateNow = new Date(Date.now())
  const actualYear = dateNow.getFullYear()

  const fillYears = actualYear => {
    const YEARS = []
    const limit = actualYear - 11
    for (let i = limit; i >= limit - 100; i--) {
      YEARS.push(i)
    }
    return YEARS
  }

  const fillDays = () => {
    const DAYS = []
    for (let i = 31; i >= 1; i--) {
      DAYS.push(i)
    }
    return DAYS
  }

  const {} = useContext(authContext)
  const [focus, setFocus] = useState({
    email: false,
    phone: false,
  })

  const [data, setData] = useState({
    email: '',
    phone: '',
  })

  const YEARS = fillYears(actualYear)
  const DAYS = fillDays()

  useEffect(() => {
    if (data.email === '' || data.email === null || data.phone === '' || data.phone === null) {
      isDisabled(true)
    } else {
      isDisabled(false)
    }
  }, [data])

  const handleFocus = e => {
    setFocus({
      ...focus,
      [e.target.name]: true,
    })
  }

  const handleBlur = () => {
    setFocus({
      email: false,
      phone: false,
    })
  }

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <FormContainer>
      <Form>
        <NormalizedInputContainer>
          <Border className={focus.email ? `${styles.active_border}` : ''}>
            <InputHelper className={focus.email ? `${styles.active_text}` : ''}>
              <span>Email</span>
            </InputHelper>
            <Input
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="email"
              id="email"
              type="email"
              value={data.email}
            />
          </Border>
        </NormalizedInputContainer>
        <NormalizedInputContainer>
          <Border className={focus.phone ? `${styles.active_border}` : ''}>
            <InputHelper className={focus.phone ? `${styles.active_text}` : ''}>
              <span>Phone</span>
            </InputHelper>
            <Input
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="phone"
              type="phone"
              id="phone"
              value={data.phone}
            />
          </Border>
        </NormalizedInputContainer>
        <EmailOrPhone>
          <span>Use email instead</span>
        </EmailOrPhone>
        <AgeContainer>
          <div>
            <div>
              <AgeHelperTitle>Date of birth</AgeHelperTitle>
            </div>
            <div>
              <AgeHelper>
                This will not be shown publicly. Confirm your own age, even if this account is for business, a pet, or
                something else.
              </AgeHelper>
            </div>
            <div>
              <SelectContainer>
                <SelectorContainer>
                  <div>
                    <span>Month</span>
                  </div>
                  <div>
                    <select name="" id="">
                      {MONTHS.map(month => (
                        <option key={month.code} value={month.code}>
                          {month.month}
                        </option>
                      ))}
                    </select>
                  </div>
                </SelectorContainer>
                <div>
                  <div>
                    <span>Day</span>
                  </div>
                  <div>
                    <select name="" id="">
                      {DAYS.map(day => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Year</span>
                  </div>
                  <div>
                    <select name="" id="">
                      {YEARS.map(year => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </SelectContainer>
            </div>
          </div>
        </AgeContainer>
      </Form>
    </FormContainer>
  )
}

export default LoginForm
