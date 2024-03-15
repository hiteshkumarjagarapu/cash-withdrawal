import './index.css'

const DenominationItem = props => {
  const {details, less} = props
  const {value} = details

  const onBut = () => {
    less(value)
  }
  return (
    <li>
      <button type="button" onClick={onBut}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
