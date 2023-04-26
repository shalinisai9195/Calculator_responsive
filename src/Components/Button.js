import './Button.css'

const Button = ({data,color,handleClick})=>{
    return <div onClick={()=>handleClick(data)} className='botton-wrapper' style={{backgroundColor:color}}>
      {data}
    </div>
}

export default Button;