export default function SearchContainer({ children }) {
  return (
    <div 
      className="search-container p-4 rounded shadow-sm mb-4" 
      style={{ 
        background: 'white', 
        border: '1px solid #dee2e6' 
      }}
    >
      {children}
    </div>
  );
}

