import { Link, LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 64px;
  padding: 8px;
  box-sizing: border-box;
  background-color: beige;
  align-items: stretch;
`

const activeLinkStyles = css`
  color: tomato;
  text-decoration: underline;
`

const normalLinkStyles = css`
  color: rebeccapurple;
  text-decoration: none;
`

type NavLinkProps = LinkProps & {
  isActive: boolean
}

export const NavLink = styled(Link).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['isActive'].includes(prop) && defaultValidatorFn(prop),
})<NavLinkProps>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  transition: 300ms;

  &:hover {
    background-color: tomato;
    color: white;
  }

  ${({ isActive }) => (isActive ? activeLinkStyles : normalLinkStyles)};
`
