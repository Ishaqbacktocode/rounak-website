import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/it-services/structured-cabling-company-dubai", destination: "/it-services/structured-cabling", permanent: true },
      { source: "/it-services/comprehensive-it-managed-services-dubai", destination: "/it-services/managed-it-services", permanent: true },
      { source: "/products/professional-cctv-installation-company-in-dubai", destination: "/products/cctv-solutions", permanent: true },
      { source: "/security/guaranteed-information-security-in-dubai", destination: "/security", permanent: true },
    ];
  },
};

module.exports = {
  allowedDevOrigins: ['192.168.56.1'],
}

export default nextConfig;