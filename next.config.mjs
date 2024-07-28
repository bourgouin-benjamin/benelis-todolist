/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: 'benjaminbourgouin',
    mongodb_password: 'Bk4XgEWuR0Z35qut',
    mongodb_cluster: 'cluser-benelistodolist.irspi39',
    mongodb_dbname: 'benelisTodolistDB',
    mongodb_appname: 'Cluser-BenelisTodolist'
  }
};

export default nextConfig;
