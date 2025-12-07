import { Button } from "react-bootstrap";
import Icon from "./Icon";

export default function IconButton({ icon, children, iconStyle = {}, ...props }) {
  return (
    <Button {...props}>
      {icon && <Icon name={icon} style={{ marginRight: '4px', ...iconStyle }} />}
      {children}
    </Button>
  );
}

