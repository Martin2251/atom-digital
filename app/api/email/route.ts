import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, telephone, message } = req.body

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  })

  // Email options
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: `Telephone: ${telephone}\n\nMessage:\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (err) {
    // Type assertion to handle error
    if (err instanceof Error) {
      return res.status(500).json({ error: err.message })
    } else {
      return res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
}
