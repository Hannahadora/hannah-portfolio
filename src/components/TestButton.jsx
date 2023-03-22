
const TestButton = ({text, label, Icon1, Icon2, background, color, padding}) => {
  return (
    <>
      <p >{label}</p>
      <button className={`normal-css-here ${background} ${color} ${padding}`}>
      <span>{Icon1}</span>
      {text}
      <span>{Icon2}</span>
    </button>
    </>
  )
}

export default TestButton