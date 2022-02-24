module.exports = {
 
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },

  env: {
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dyhdzqwx7/image/upload',
    CLOUD_NAME: 'dyhdzqwx7',
    UPLOAD_PRESET:'welldds',
    API_KEY: '721115116125189',
    API_SECRET: 'c5q7ENxNO4ALnBqwK8L0-kOHoFA',
    JWT_SECRET: 'c5q7ENxNO4ALnBqwK8L0-kOHoFA',
  },
}
