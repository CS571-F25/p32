import { Card } from "react-bootstrap";

export default function StyledCard({ children, className = "", style = {}, ...props }) {
  return (
    <Card 
      className={`m-2 ${className}`} 
      style={{ 
        width: "18rem", 
        minHeight: "300px",
        ...style
      }}
      {...props}
    >
      {children}
    </Card>
  );
}

