import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        const { nom, prenom, email, workshop, objet } = body;

        const response = await resend.emails.send({
            from: "MALOKO GAMES <onboarding@resend.dev>",
            to: ["cybelldomasinternational@yahoo.fr"],
            subject: "Nouvelle inscription",
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #001b3c;">
                <h2 style="color: #b7102a;">Nouvelle Inscription Réceptionnée</h2>
                <p><strong>Participant :</strong> ${nom} ${prenom}</p>
                <p><strong>E-mail :</strong> ${email}</p>
                <p><strong>Atelier Sélectionné :</strong> ${workshop}</p>
                <p><strong>Message / Remarques :</strong></p>
                <div style="background-color: #f0f3ff; padding: 15px; border-radius: 8px; border-left: 4px solid #b7102a;">
                    ${objet || "Aucun message spécifié."}
                </div>
                </div>
            `,
        });

        return Response.json({
            success: true,
            response,
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                error,
            },
            { status: 500 }
        );
    }
}