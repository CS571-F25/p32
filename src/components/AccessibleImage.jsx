import Image from "react-bootstrap/Image";

export default function AccessibleImage({ src, alt, ...props }) {
  return <Image src={src} alt={alt} {...props} />;
}