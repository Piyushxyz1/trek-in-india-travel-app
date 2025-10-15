import clientPromise from "@/lib/mongodb";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db('trekkingDB');
    const collection = db.collection('bookings');

    const result = await collection.insertOne({
      ...body,
      createdAt: new Date()
    });

    // ✅ Send confirmation email using Resend
    await resend.emails.send({
      from: 'Trekking Tours <onboarding@resend.dev>', // or your verified domain
      to: body.email,
      subject: 'Trip Booking Confirmation',
      html: `
        <p>Hi ${body.name},</p>
        <p>Thanks for booking a trip with us! Here are your details:</p>
        <ul>
          <li><strong>Arrival Date:</strong> ${body.date}</li>
          <li><strong>Duration:</strong> ${body.duration} days</li>
          <li><strong>Persons:</strong> ${body.person}</li>
          <li><strong>Country:</strong> ${body.country}</li>
        </ul>
        <p>We’ll contact you soon with more details.</p>
        <p>— Trekking Team</p>
      `
    });

    return Response.json({ success: true, insertedId: result.insertedId });
    
  }  catch (error) {
  console.error('Full error:', error);
  return Response.json({ success: false, error: error.message || 'Unknown error' }, { status: 500 });
}

}
