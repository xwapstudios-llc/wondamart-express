import config from "./config";

import https from 'https';

interface InitParams {
    amount: number;
    email: string;
    currency: "GHS";
    phoneNumber: string;
    provider: "mtn" | "vod" | "atl";
}
interface ResponseInterface {
    status: boolean;
    message: string;
    data: {
        reference: string;
        status: string;
        display_text: string
    }
}

const init = () => {
    const params = JSON.stringify({
        "amount": 100,
        "email": "customer@email.com",
        "currency": "GHS",
        "mobile_money": {
            "phone": "0551234987",
            "provider": "mtn"
        }
    })

    const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/charge',
        method: 'POST',
        headers: {
            Authorization: config.paystack_key,
            'Content-Type': 'application/json'
        }
    }

    const req = https.request(options, res => {
        let data = ''

        res.on('data', (chunk) => {
            data += chunk
        });

        res.on('end', () => {
            console.log(JSON.parse(data) as ResponseInterface)
        })
    }).on('error', error => {
        console.error(error)
    })

    req.write(params)
    req.end()
}
