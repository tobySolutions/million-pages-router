import million from "million/compiler";
import MillionCompiler from '@million/lint';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const millionConfig = {
  auto: true, // if you're using RSC: auto: { rsc: true },
};

export default million.next(
  MillionCompiler.next({})(nextConfig),
  millionConfig
);
