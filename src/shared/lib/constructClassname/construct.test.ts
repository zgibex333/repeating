import  createClassName from './construct'

describe('createClassName', () => {
  test('should return correct classname string', () => {
    const className = createClassName('Main', { mod: true, unmod: false }, [
      'qwerty',
    ])
    expect(className).toBe('Main qwerty mod')
  })
  test('should return correct classname with single param', () => {
    const className = createClassName('Main')
    expect(className).toBe('Main')
  })
  test('should return correct classname with undefined', () => {
    const className = createClassName('Main', {}, [undefined])
    expect(className).toBe('Main')
  })
})
