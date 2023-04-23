import { classNames } from 'shared/lib/classnames/classnames'

describe('classnames', () => {
  test('should return correct classname string', () => {
    const className = classNames('Main', { mod: true, unmod: false }, [
      'qwerty',
    ])
    expect(className).toBe('Main qwerty mod')
  })
  test('should return correct classname with single param', () => {
    const className = classNames('Main')
    expect(className).toBe('Main')
  })
  test('should return correct classname with undefined', () => {
    const className = classNames('Main', {}, [undefined])
    expect(className).toBe('Main')
  })
})
