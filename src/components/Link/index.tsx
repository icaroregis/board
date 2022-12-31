import NextLink from 'next/link';

export default function Link({ href, title = null, img = null, alt = null, ...rest }) {
  return (
    <NextLink href={href} {...rest}>
      {title}
      {img !== null && alt !== null && <img src={img} alt={alt} />}
    </NextLink>
  );
}
