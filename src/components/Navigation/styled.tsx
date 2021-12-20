import { Link, LinkProps } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: beige;
`

export const Logo = styled.img`
  display: inline-block;
  max-height: 100%;
`

export const LogoLink = styled(Link)`
  border-radius: 50%;
  transition: 300ms;

  &:hover {
    background-color: tomato;
  }
`

export const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  box-sizing: border-box;
  height: 64px;
  padding: 8px 0;

  ${down('sm')} {
    padding: 8px;
  }
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
