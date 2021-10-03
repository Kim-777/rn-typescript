import { useState, useCallback } from "react";

export const useToggle = (initialValue: boolean = false, deps: any[] = []): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue)
  const toggleValue = useCallback(() => {
    setValue((prev) => !prev)
  }, deps)

  return [value, toggleValue]
}