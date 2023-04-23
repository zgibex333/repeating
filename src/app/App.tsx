import { Suspense, useEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import createClassName from 'shared/lib/constructClassname/construct'

const App = () => {
  const { theme } = useTheme()
  return (
    <div className={createClassName('app', {}, [theme])}>
      <Suspense fallback="loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
export default App
