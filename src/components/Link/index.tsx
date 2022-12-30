import NextLink from 'next/link';

export default function Link({ href, title }) {
  return <NextLink href={href}>{title}</NextLink>;
}
