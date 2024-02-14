/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    head:{
        link: [
            {
                rel: 'stylesheet',
                href:"https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,500;1,400&family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Libre+Baskerville&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Suranna&display=swap",
            },
        ],
    },
    images: {
        domains: ['img.icons8.com'],
    },
};


export default nextConfig;
