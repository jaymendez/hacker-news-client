import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { App } from '../components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createContext, useEffect, useState } from 'react'
import { hotjar } from 'react-hotjar'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

export const StoryContext = createContext<{
  selectedStoryId: number
  setSelectedStoryId: (storyId: number) => void
  isPanelOpen: boolean
  setIsPanelOpen: (open: boolean) => void
}>({
  selectedStoryId: 0,
  setSelectedStoryId: () => {},
  isPanelOpen: false,
  setIsPanelOpen: () => {},
})

export const SearchContext = createContext<{
  query: string
  setQuery: (query: string) => void
}>({ query: '', setQuery: () => {} })

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedStoryId, setSelectedStoryId] = useState(0)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    hotjar.initialize(2058541, 6)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContext.Provider value={{ query, setQuery }}>
        <StoryContext.Provider
          value={{
            selectedStoryId,
            setSelectedStoryId,
            isPanelOpen,
            setIsPanelOpen,
          }}
        >
          <App>
            <Component {...pageProps} />
          </App>
        </StoryContext.Provider>
      </SearchContext.Provider>
    </QueryClientProvider>
  )
}

export default MyApp
