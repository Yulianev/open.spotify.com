// routes.js

import MainWindow from '../MainWindow/MainWindow'
import Search from '../Pages/Search'

export const routes = [
  {
    path: "/",
    element: <MainWindow />
  },
  {   
    path: "/search",
    element: <Search />
  }
]

export default routes