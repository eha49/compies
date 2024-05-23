import styled from "styled-components";

function Breadcrumbs({ children }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol>{children}</ol>
    </nav>
  );
}

function Crumbs({ href, children }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

export { Breadcrumbs, Crumbs };
