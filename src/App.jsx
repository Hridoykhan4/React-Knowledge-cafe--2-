import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>

      <Header></Header>
      <div className='md:flex gap-4  w-11/12 mx-auto my-4 justify-center'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
