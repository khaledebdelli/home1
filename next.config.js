const withPWA = require("next-pwa");
const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]) // pass the modules you would like to see transpiled

module.exports = withTM(withPWA({
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'avatars.githubusercontent.com'],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
}))
