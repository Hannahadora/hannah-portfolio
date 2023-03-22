import React, { useState } from 'react'
import CustomButton from '../Shared/CustomButton';
import Input from '../Shared/Input';
import TextArea from '../Shared/TextArea';
import axios from 'axios';
import { toast } from 'react-toastify';



const ContactUsForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: process.env.REACT_APP_FORMSPREE_URL_TOKEN,
      data: values,
    })
      .then((response) => {
        handleServerResponse(
          true,
          // toast.success(`Thank you ${(values.name).c}, your message has been recieved.`), 
          toast.success(`Thank you ${(values.name).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}, your message has been recieved.`),
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div className='w-full max-w-[400px]'>
      <form onSubmit={(e) => sendMessage(e)}>
        <Input name={'name'} value={values.name} label='name' type='text' required={true} onHandleInputChange={(e) => onHandleInputChange(e)} />
        <Input name={'email'} value={values.email} label='email' type='email' required={true} onHandleInputChange={(e) => onHandleInputChange(e)} />
        <TextArea name={'message'} value={values.message} label='MESSAGE' type='text' required={true} onHandleInputChange={(e) => onHandleInputChange(e)} />
        <div className='float-right clear-right'>
          <CustomButton type="submit" disabled={status.submitting} text={!status.submitting ? !status.submitted ? 'SEND MESSAGE' : 'MESSAGE SENT' : 'SENDING MESSAGE...'} />
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm