

"use client"
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const ContactForm: React.FC = () => {
  const initialValues = {
    name: '',
    email: '',
    telephone: '',
    message: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    telephone: Yup.string()
      .matches(/^[0-9]+$/, 'Telephone must be a number')
      .required('Telephone is required'),
    message: Yup.string().required('Message is required'),
  })

  const handleSubmit = (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
    console.log(values)
    toast.success('Message sent successfully!', { position: toast.POSITION.TOP_CENTER })
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="w-full max-w-lg p-6 mx-auto my-12 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <Field name="name" type="text" className="w-full px-3 py-2 border rounded" />
          <ErrorMessage name="name" component="div" className="text-red-600" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <Field name="email" type="email" className="w-full px-3 py-2 border rounded" />
          <ErrorMessage name="email" component="div" className="text-red-600" />
        </div>

        <div className="mb-4">
          <label htmlFor="telephone" className="block text-gray-700">Telephone</label>
          <Field name="telephone" type="text" className="w-full px-3 py-2 border rounded" />
          <ErrorMessage name="telephone" component="div" className="text-red-600" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <Field as="textarea" name="message" className="w-full px-3 py-2 border rounded" />
          <ErrorMessage name="message" component="div" className="text-red-600" />
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded">Submit</button>
      </Form>
    </Formik>
  )
}

export default ContactForm
