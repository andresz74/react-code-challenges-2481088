export default function Color ({ hex, name, onChangeColor }) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick={() => onChangeColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}
