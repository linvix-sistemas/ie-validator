# @linvix-sistemas/ie-validator
Pacote para validação de Inscrições Estaduais Brasileiras.

[![npm][npm-image]][npm-url]
![GitHub top language](https://img.shields.io/github/languages/top/linvix-sistemas/ie-validator)
![GitHub last commit](https://img.shields.io/github/last-commit/linvix-sistemas/ie-validator)

[npm-image]: https://img.shields.io/npm/v/@linvix-sistemas/ie-validator.svg?style=flat
[npm-url]: https://npmjs.com/package/@linvix-sistemas/ie-validator

### Instalação:
```
yarn add @linvix-sistemas/ie-validator
```

### Uso
```ts
import IEValidator from '@linvix-sistemas/ie-validator';
// OU
import { validateIE } from '@linvix-sistemas/ie-validator';

// valida uma IE
const valid = IEValidator.validate('SC', '586653554');
```

## Licença

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2025-atual