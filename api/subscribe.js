const axios = require("axios");
const cors = require("micro-cors")();

module.exports = cors(async (req, res) => {
    if (req.method === "POST") {
        const { email } = req.body;


        // 更改为您的 Mailchimp Audience ID 和 API Key
        const audienceId = 'YOUR_AUDIENCE_ID';
        const apiKey = 'YOUR_API_KEY';

        const dc = apiKey.split("-")[1];
        const url = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

        try {
            await axios.post(
                url,
                {
                    email_address: email,
                    status: "subscribed",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `apikey ${apiKey}`,
                    },
                }
            );

            res.status(200).json({ message: "订阅成功" });
        } catch (error) {
            console.error("订阅失败：", error);
            res.status(500).json({ message: "订阅失败，请稍后再试。" });
        }
    } else {
        res.status(405).json({ message: "只允许 POST 请求" });
    }
});
