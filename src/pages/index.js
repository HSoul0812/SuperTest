import { useMemo, useState } from 'react'
import Layout from '../component/layout'
import { TITLES } from '../constants'
import Input from '../component/input'
import Button from '../component/button'
import CountrySelector from '../component/select'
import ReviewCard from '../component/review-card'

const Landing = () => {
  const [step, setStep] = useState(0)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState()
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [validation, setValidation] = useState({})

  const isInitialValid = useMemo(
    () => validation.email && validation.username && !!country,
    [validation, country],
  )

  const isPasswordValid = useMemo(
    () =>
      validation.password &&
      validation.repeatpassword &&
      password === repeatPassword,
    [validation, password, repeatPassword],
  )

  const handleValidation = (fieldName) => {
    setValidation((prev) => ({ ...prev, [fieldName]: true }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
  }

  const handleComplete = () => {
    setStep(0)
    setUserName('')
    setEmail('')
    setCountry('')
    setPassword('')
    setRepeatPassword('')
    setValidation('')
  }

  return (
    <Layout title={TITLES[step]} step={step}>
      {step === 0 && (
        <>
          <Input
            title="Username"
            placeholder="Input username"
            type="text"
            value={userName}
            onChange={setUserName}
            handleValidation={handleValidation}
          />
          <Input
            title="Email"
            placeholder="Input email"
            type="email"
            value={email}
            onChange={setEmail}
            handleValidation={handleValidation}
          />
          <CountrySelector
            title="Country"
            handleSelect={setCountry}
            value={country}
          />
          <Button onClick={handleNext} disabled={!isInitialValid}>
            Continue
          </Button>
        </>
      )}
      {step === 1 && (
        <>
          <Input
            title="Password"
            placeholder="Input password"
            type="password"
            value={password}
            onChange={setPassword}
            handleValidation={handleValidation}
          />
          <Input
            title="Repeat password"
            placeholder="Repeat password"
            type="password"
            value={repeatPassword}
            onChange={setRepeatPassword}
            handleValidation={handleValidation}
          />
          <Button onClick={handleNext} disabled={!isPasswordValid}>
            Continue
          </Button>
        </>
      )}
      {step === 2 && (
        <>
          <div className="flex flex-col gap-6">
            <ReviewCard label="Username" value={userName} />
            <ReviewCard label="Email" value={email} />
            <ReviewCard label="Country" value={country?.label} />
          </div>
          <Button onClick={handleComplete}>Complete</Button>
        </>
      )}
    </Layout>
  )
}

export default Landing
