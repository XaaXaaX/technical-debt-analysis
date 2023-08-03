require("code-forensics").configure({
  repository: {
    rootPath: "../myproject",
    includePaths: [
      'src',
      'tests',
      'cfn'
    ],
    excludePaths: [
      '**/node_modules',
      '**/__tests__',
      '**/+(*.json)'
    ]
  },
  layerGroups: {
    'code-test': [
      { name: 'Code', paths: ['src'] },
      { name: 'Unit Tests', paths: [/__tests__\/.*[._]spec\..*/] },
      { name: 'E2E Tests', paths: ['tests'] }
    ],
    'mvc-layers': [
      { name: 'Domain', paths: [/^src\/node\/Domain/] },
      { name: 'Infrastructure', paths: ['src/node/Infrastructure'] },
      { name: 'Handlers', paths: [/^src\/node\/Api/, /^src\/node\/Application/] }
    ]
  }
})