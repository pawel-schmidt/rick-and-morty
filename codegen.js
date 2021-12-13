module.exports = {
  schema: process.env.VITE_API_URL,
  documents: 'src/**/*.graphql',
  extensions: {
    codegen: {
      generates: {
        'schema.json': {
          plugins: ['introspection'],
        },
        'schema.graphql': {
          plugins: ['schema-ast'],
        },
        'src/generated/graphql.ts': {
          plugins: [
            'add',
            'typescript',
            'typescript-operations',
            'typescript-react-apollo',
            'named-operations-object',
          ],
          config: {
            avoidOptionals: true,
            skipTypename: false,
            withHooks: true,
            withHOC: false,
            withComponent: false,
            content: '/* eslint-disable */',
          },
        },
      },
    },
  },
}
