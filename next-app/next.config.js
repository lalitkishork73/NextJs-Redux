const { Domain } = require('domain')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["cdn.pixabay.com","images.pexels.com"]
    } ,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
      },
    
    
}

module.exports = nextConfig
