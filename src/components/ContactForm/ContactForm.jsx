import { Formik, Field, Form } from "formik";
import { nanoid } from "nanoid";
import React from "react";
import { useId } from "react";


const initialValues = { username: "", phone: "" };



const ContactForm = ({onAddUser}) => {
  const id = useId();  

  const handleSubmit = (values, action) => {
    onAddUser({id: nanoid(),...values});
    action.resetForm();
  };


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field type="text" name="name" id={`${id}-name`} />
        <label htmlFor={`${id}-number`}>Number</label>
        <Field type="text" name="number" id={`${id}-number`} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
