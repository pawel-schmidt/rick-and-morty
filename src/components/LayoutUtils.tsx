import { up } from 'styled-breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  transition: 1s;

  ${up('sm')} {
    max-width: ${({ theme }) => theme.breakpoints.sm};
  }

  ${up('md')} {
    max-width: ${({ theme }) => theme.breakpoints.md};
  }

  ${up('lg')} {
    max-width: ${({ theme }) => theme.breakpoints.lg};
  }

  ${up('xl')} {
    max-width: ${({ theme }) => theme.breakpoints.xl};
  }
`
