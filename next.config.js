/** @type {import('next').NextConfig} */
const nextConfig = {
	// images: {
	// 	disableStaticImages: true,
	// },

	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'cdn.sanity.io', 
		  },
		],
	  },

};

module.exports = nextConfig;
