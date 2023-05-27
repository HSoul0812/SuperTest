import { TITLES } from '../../constants'
import Stage from '../stage'

const Layout = ({ title, step, children }) => {
  return (
    <div className="relative w-full h-screen bg-[url('./assets/bg.svg')] bg-no-repeat bg-cover p-20">
      <div className="text-center">
        <div className="font-medium text-4xl leading-[44px]">
          Super test form
        </div>
        <div className="mt-[17px] text-xl text-dark-gray">{title}</div>
      </div>
      <div className="mt-10 w-40 mx-auto lg:mx-0">
        {TITLES.map((title, idx) => (
          <Stage
            status={step === idx ? 0 : step > idx ? 1 : 2}
            title={title}
            key={idx}
          />
        ))}
      </div>
      <div className="relative lg:absolute mt-10 flex justify-center lg:block lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
        <div className="flex flex-col gap-10 w-[400px] bg-dark-gray rounded-[20px] px-5 py-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
