
type Props = {
  title: string;
  className?: string;
}

const Service = ({ title, className }: Props) => {
  return (
    <div className="text-[18px] leading-[1.66]">
      <span className="me-[10px]">+</span>
      {title}
    </div>
  )
}

export default Service