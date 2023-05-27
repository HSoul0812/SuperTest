import { useMemo } from 'react'

const Stage = ({ title, status }) => {
  // The color of the icon is determined by the status
  // 0: purple, 1: gray 2: dark gray
  const color = useMemo(
    () =>
      !status
        ? 'bg-purple'
        : status === 1
        ? 'bg-icon-dark-gray'
        : 'bg-icon-gray',
    [status],
  )

  return (
    <div className="flex gap-3 items-center">
      <div className={`w-4 h-4 rounded-sm ${color}`} />
      <div className="text-dark-gray">{title}</div>
    </div>
  )
}

export default Stage
