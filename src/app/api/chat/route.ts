import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { buildSiteContext } from '@/lib/siteKnowledge';

export const runtime = 'edge';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            'GROQ_API_KEY is not configured on the server. Please verify your .env file.',
        },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { messages } = body as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Valid chat messages array is required.' },
        { status: 400 }
      );
    }

    // Extract latest user inquiry for dynamic site page context retrieval
    const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
    const siteKnowledgeContext = buildSiteContext(lastUserMessage);

    const systemPrompt = `You are the official AI Travel Specialist and Digital Concierge for **Govind Tours & Travels**, an accredited travel agency headquartered at A-312, Shilp Aaron, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054, India (Direct Phone/WhatsApp: +91 94264 17399, Email: info@govindtours.com).

### CORE DIRECTIVES & PERSONA:
1. **Accurate & Grounded in Site Content**: Answer all inquiries strictly based on Govind Tours' verified service catalog, pricing, bank coordinates, office hours, and route data provided in the SITE KNOWLEDGE BASE below. If a user asks about pages or specific information on the site, synthesize the exact facts from the site data.
2. **Markdown Formatting**: Use clean, structured GitHub-flavored Markdown. Use bold headings (###, ####), bulleted lists, and markdown tables for pricing or itineraries.
3. **Internal Site Links**: Always refer users to the appropriate site page using markdown links, such as:
   - [Air Tickets & Flights](/air-tickets)
   - [Visa Services](/visa)
   - [Tour Packages](/packages)
   - [Passport Assistance](/passport)
   - [Travel Insurance](/travel-insurance)
   - [Bank & Payment Accounts](/payment-details)
   - [Office Contact Desk](/contact)
   - [Travel Advisory Blog](/blog)
   - [Privacy Policy](/privacy-policy)
4. **ANTI-EMOJI POLICY**: Do NOT use emojis anywhere in your response. Maintain a refined, editorial, and professional travel concierge tone without decorative emoji clutter.
5. **Proactive Suggestions**: At the bottom of EVERY response, provide 2 to 3 tailored follow-up queries or actionable suggestions under a clear markdown header (e.g., "#### Suggested Next Steps:"), guiding the traveler on what to ask or do next.
6. **Office & Contact Reference**: For bookings, seat confirmations, or custom departures, encourage the traveler to visit the Bodakdev desk or call/WhatsApp +91 94264 17399.

---
### VERIFIED SITE KNOWLEDGE BASE:
${siteKnowledgeContext}
---`;

    const groq = new Groq({ apiKey });

    // Model selection: qwen/qwen3.8-27b is verified active and ultra-fast on this Groq account
    const model = process.env.GROQ_MODEL || 'qwen/qwen3.8-27b';

    const conversation: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...messages.slice(-8), // Keep context window lean and focused
    ];

    const response = await groq.chat.completions.create({
      model,
      messages: conversation,
      temperature: 0.4,
      max_tokens: 1024,
    });

    const reply = response.choices[0]?.message?.content || '';

    return NextResponse.json({
      reply,
      model,
    });
  } catch (error: any) {
    console.error('Groq Chat API Error:', error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          'Failed to retrieve a response from Groq AI. Please check your connection or API key.',
      },
      { status: 500 }
    );
  }
}

