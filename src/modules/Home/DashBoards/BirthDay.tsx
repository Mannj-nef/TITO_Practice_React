import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { MOUNTAIN_PUPLE } from '~/mocks/images'
import useUser from '~/store/user'
import { handleGetDate } from '~/utils/getDate'

const DashBoardBirthDay = () => {
  const user = useUser((state) => state.user)

  return (
    <div className='bg-white shadow-boxPrimary h-full rounded-lg relative overflow-hidden cursor-pointer'>
      <span className='absolute inline-block w-fit  px-5 py-1 rounded-full bg-purple-400 z-10 bg-opacity-30 text-purple-500 xs:top-4 top-5 xs:right-4 right-5'>
        All Day
      </span>

      <div className='overlay bg-blackToWhite absolute w-full h-full'></div>
      <div className='w-full h-full'>
        <img src={MOUNTAIN_PUPLE} className='w-full h-full block object-cover top-0 left-0' alt='mountain' />
      </div>

      <div className='absolute xs:left-4 xs:bottom-4 left-5 bottom-5 '>
        <span className='text-white'>{handleGetDate(`${user?.date_of_birth}`) || 'January 05'}</span>
        <h3 className='text-sm md:text-lg text-white'>{user?.name}' Birthday</h3>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(DashBoardBirthDay), {
  FallbackComponent: ErrorComponent
})
