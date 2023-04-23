import { classnames } from 'shared/lib/classnames/classnames'

describe('classnames', () => {
  test('should return correct classname string', () => {
    const className = classnames('Main', { mod: true, unmod: false }, [
      'qwerty',
    ])
    expect(className).toBe('Main qwerty mod')
  })
  test('should return correct classname with single param', () => {
    const className = classnames('Main')
    expect(className).toBe('Main')
  })
  test('should return correct classname with undefined', () => {
    const className = classnames('Main', {}, [undefined])
    expect(className).toBe('Main')
  })
})
