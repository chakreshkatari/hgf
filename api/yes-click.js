module.exports = (req, res) => {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).end("Method Not Allowed");
    }

    // This timestamp is written to the Vercel function logs, not returned to the visitor.
    console.info("Yes response recorded:", new Date().toISOString());
    return res.status(204).end();
};
