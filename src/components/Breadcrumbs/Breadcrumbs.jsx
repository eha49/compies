import styled from "styled-components";

function Breadcrumbs({ children }) {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
}

function Crumbs({ href, children }) {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}>{children}</CrumbLink>
    </CrumbWrapper>
  );
}

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CrumbWrapper = styled.li`
  display: inline;

  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

export { Breadcrumbs, Crumbs };
