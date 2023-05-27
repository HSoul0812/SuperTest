const ReviewCard = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center text-sm leading-4">
      <div className="text-card-gray">{label}</div>
      <div className="font-medium text-white">{value}</div>
    </div>
  )
}

export default ReviewCard
