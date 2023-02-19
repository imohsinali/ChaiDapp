import { ethers } from "ethers"
// const Buy = ({state}) => {
//     const buyChai=async (e)=>{
//         e.preventDefault()
//         const {contract}=state
//         const name=document.getElementById("name").value
//         const message=document.getElementById("message").value
//        console.log(contract,name,message)
//        const value={value:ethers.utils.parseEther('0.00001')}
//        const transction=await contract.buyChai(name,message,value)
//        await transction.wait()
//        console.log('transction is done')

//     }
// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    
    Input,
  } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';

function Buy() {
    function validateName(value) {
      let error
      if (!value) {
        error = 'Name is required'
      } else if (value.toLowerCase() !== 'naruto') {
        error = "Jeez! You're not a fan 😱"
      }
      return error
    }
    return (
      <Formik
        initialValues={{ name: 'Sasuke' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder='name' padding={4} width={20}/>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
  }

  export default Buy