// utils/send-email.ts
export async function sendEmail(data: { name: string, email: string, telephone: string, message: string }) {
    const apiEndpoint = '/api/email'
  
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  
    const result = await response.json()
    console.log(1)
    if (response.ok) {
      return result.message
    } else {
      throw new Error(result.error)
    }
  }
  