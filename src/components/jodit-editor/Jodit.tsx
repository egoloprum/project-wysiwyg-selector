"use client"

import { useRef, useMemo, FC, useEffect, useState } from "react"
import JoditEditor from "jodit-react"

interface JoditProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export const Jodit: FC<JoditProps> = ({ placeholder, value, onChange }) => {
  const editor = useRef<null>(null)

  const config = useMemo(() => ({
    readonly: false,
    placeholder: placeholder || 'Start typing...',
  }), [placeholder])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      onBlur={newContent => onChange(newContent)}
    />
  )
}
