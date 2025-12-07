import Icon from "./Icon";

export default function PageHeader({ icon, title, subtitle, children }) {
  return (
    <div className="page-header mb-4">
      <h1 className="display-5 fw-bold mb-3">
        {icon && <Icon name={icon} style={{ marginRight: '12px' }} />}
        {title}
      </h1>
      {subtitle && <p className="lead text-muted">{subtitle}</p>}
      {children}
    </div>
  );
}

