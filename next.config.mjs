import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com"
            }
        ]
    },
    webpack: (config) => {
        config.resolve.alias["handlebars"] = path.resolve(
            "./node_modules/handlebars/dist/handlebars.min.js"
        )
        return config
    }
};

export default nextConfig;
