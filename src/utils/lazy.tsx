import React from 'react'

type Params = Parameters<typeof React.lazy>
interface Lazy {
  // eslint-disable-next-line no-unused-vars
  (...params: Params): React.ComponentType
}

const getComponentName = (path: string) => {
  const slashIndex = path.lastIndexOf('/') + 1
  const part = path.substring(slashIndex)
  const dotIndex = part.indexOf('.')
  return part.substring(0, dotIndex)
}

const lazy: Lazy = (factory) => {
  const Component = React.lazy(factory)
  const LazyLoadedWithSuspense = () => (
    <React.Suspense fallback={<>…</>}>
      <Component />
    </React.Suspense>
  )
  const componentName = getComponentName(factory.toString())
  LazyLoadedWithSuspense.displayName = `LazyLoadedWithSuspense(${componentName})`
  return LazyLoadedWithSuspense
}

export default lazy
