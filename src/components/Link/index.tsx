import NextLink from 'next/link';

export default function Link({ href, title, img = '', alt = '', ...rest }) {
  return (
    <NextLink href={href} {...rest}>
      {title}
      {img !== '' && alt !== '' && <img src={img} alt={alt} />}
    </NextLink>
  );
}
