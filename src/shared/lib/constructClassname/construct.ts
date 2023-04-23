type Mods = Record<string, boolean | string>

const createClassName = (
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key]) => key),
  ].join(' ')
}

export default createClassName;
