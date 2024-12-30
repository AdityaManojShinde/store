export async function GET() {
    return new Response('Hello from Aditya!', {
        status: 200,
    });
}

export async function POST() {
    return new Response("New Data Posted!");
}