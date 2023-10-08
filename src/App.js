import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {routes} from './routes/index'
import DefaulComponent from './components/DefaultComponent/DefaultComponent'

function App () {
  return (
    <div>
        <Router>
          <Routes>
              {routes.map((routes)=> {
                const Page=routes.page
                const Layout= routes.isShowHeader  ? DefaulComponent : Fragment
                return (
                  <Route key = {routes.path} path={routes.path} element={
                  <Layout>
                    <Page /> 
                  </Layout>
                  }/> 
                  )
              })}
          </Routes>
        </Router>
    </div>
)
}
export default App