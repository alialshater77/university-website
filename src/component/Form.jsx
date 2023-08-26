import React from 'react'
import { Link } from 'react-router-dom';

const Form = ({input1 , input2 ,input3, text , onSubmitHandler , buttenText}) => {

    return (
        <form className='comment-form' method="POST" onSubmit={onSubmitHandler}>
            <input type='text' placeholder={input1}/>
            <input type='email' placeholder={input2} />
            {input3 && 
            <input type='text' placeholder={input3}/>
            }
            <textarea name='name' rows="5" placeholder={text} />
            <Link className="text-dec wave-btn" to="/">
                <span ><button type="submit" name="button" className="text-dec" style={{ fontSize:"14px" , fontWeight:"600"}}>{buttenText}</button></span>
                <div className="liquid"></div>
            </Link>
        </form>
    )
}

export default Form;