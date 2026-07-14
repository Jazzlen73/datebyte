import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASS

  if (!emailUser || !emailPass) {
    console.error('Missing email credentials')
    return NextResponse.json(
      { success: false, error: 'Missing email configuration' },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  })

  try {
    const data = await request.json()

    // NEW: supports your quiz payload: { answers: {...} }
    if (data?.answers && typeof data.answers === 'object') {
      const answers = data.answers as Record<string, string>

      const answerRows = Object.entries(answers)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join('')

      await transporter.sendMail({
        from: emailUser,
        to: emailUser,
        subject: '🧠 New Quiz Submission',
        html: `
          <h1>New Quiz Submission</h1>
          <ul>${answerRows || '<li>No answers found</li>'}</ul>
        `,
        attachments: [
          {
            filename: `quiz-response-${new Date().toISOString()}.json`,
            content: JSON.stringify(data, null, 2),
            contentType: 'application/json',
          },
        ],
      })

      return NextResponse.json({ success: true })
    }

    // OLD format support (kept)
    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      subject: '💕 New Date Response!',
      html: `
        <h1>She responded!</h1>
        <p>Date: ${data.date ? new Date(data.date).toLocaleDateString() : 'N/A'}</p>
        <p>Time: ${data.time ?? 'N/A'}</p>
        <p>Food: ${Array.isArray(data.food) ? data.food.join(', ') : 'N/A'}</p>
        <p>Movie: ${data.movie ?? 'N/A'}</p>
        <p>Excitement: ${data.excitement ?? 'N/A'}/100</p>
      `,
      attachments: [
        {
          filename: `date-response-${new Date().toISOString()}.json`,
          content: JSON.stringify(data, null, 2),
          contentType: 'application/json',
        },
      ],
    })

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    console.error('Failed to send email:', error)
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
    return NextResponse.json(
      { success: false, error: 'An unknown error occurred' },
      { status: 500 }
    )
  }
}
