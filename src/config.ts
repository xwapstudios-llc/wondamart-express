import dotenv from 'dotenv';

dotenv.config({path: "./.env"});

interface Config {
    port: number;
    nodeEnv: string;
    paystack_key: string;
}

const config: Config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    paystack_key: process.env.PAYSTACK_KEY || 'test',
};

export default config;