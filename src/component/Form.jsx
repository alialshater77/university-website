import React from 'react'
import { Link } from 'react-router-dom';

const Form = ({input1 , input2 ,input3, text ,buttenText}) => {
    const {register, trigger , formState:{errors}} = useForm();

    const onSubmitHandler = async (e) =>{
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }

    return (
        <form className='comment-form' method="POST" onSubmit={(e) => onSubmitHandler(e)} action="https://formsubmit.co/alialshater7@gmail.com" target="_blank">

            <input type='text' placeholder={input1}
            {...register("name",{
                required: true,
                maxLength: 100,
            })}
            />
            {errors.name && (
                <p className='paragraph-form'>
                    {errors.name.type === "required" && "This field is reqierd."}
                    {errors.name.type === "maxLength" && "Max length is 100 char.."}
                </p>
            )}


            <input type='email' placeholder={input2} 
            {...register("email",{
                required: true,
                pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            />
            {errors.email && (
                <p className="paragraph-form">
                    {errors.email.type === "required" && "This field is reqierd."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                </p>
            )}


            {input3 && 
            <input type='text' placeholder={input3}/>
            }
            <textarea name='name' rows="5" cols={50} placeholder={text} 
            {...register("message",{
                required: true,
                maxLength: 2000,
            })}
            />
            {errors.message && (
                <p className="paragraph-form">
                    {errors.message.type === "required" && "This field is reqierd."}
                    {errors.message.type === "maxLength" && "Max length is 2000 char.."}
                </p>
            )}


            <Link className="text-dec wave-btn" to="/">
                <span ><button type="submit" name="button" className="text-dec" style={{ fontSize:"14px" , fontWeight:"600"}}>{buttenText}</button></span>
                <div className="liquid"></div>
            </Link>
        </form>
    )
}

export default Form;