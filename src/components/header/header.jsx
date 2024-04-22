import TopTweets from './top-tweets'
import PageTitle from './page-title'

function Header(){
    return (
      <div className='header border-bottom p-8 font-bold flex items-center justify-between'>
        <div className='text-2xl'>
        <PageTitle title='Home'/>
        </div>
        <TopTweets />
      </div>
    )
  }

export default Header