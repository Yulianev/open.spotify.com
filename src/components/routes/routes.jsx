// routes.js

import HomeWindow from '../MainWindow/Home/HomeWindow'
import Search from '../MainWindow/Search/Search'

export const routes = [
  {
    path: "/",
    element: <HomeWindow />
  },
  {   
    path: "/search",
    element: <Search />
  }
]

export default routes