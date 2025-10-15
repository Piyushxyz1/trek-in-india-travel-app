// components/Breadcrumb.jsx
import Link from 'next/link';
import './breadcrumb.css'

const Breadcrumb = ({ path = [] }) => {
  return (
    <nav className="breadcrumb w-full max-w-4xl md:max-w-6xl xl:max-w-7xl px-4 py-4 mx-auto md:px-10">
      <Link href="/">Home</Link>
      {path.map((item, i) => (
        <span key={i} >
          &nbsp; / &nbsp;
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;