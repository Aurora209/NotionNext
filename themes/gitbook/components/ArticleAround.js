import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'

/**
 * 上一篇，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleAround({ prev, next }) {
  const { locale } = useGlobal()

  if (!prev || !next) {
    return <></>
  }

  return (
    <section className='text-gray-800 dark:text-gray-400 flex items-center justify-between gap-x-3 my-4'>
      <SmartLink
        href={prev.href}
        passHref
        className='rounded border w-full h-20 px-3 cursor-pointer justify-between items-center flex hover:text-green-500 duration-300'>
        <i className='mr-1 fas fa-angle-left' />
        <div>
          <div>{locale.COMMON.PREV_POST}</div>
          <div>{prev.title}</div>
        </div>
      </SmartLink>

      <SmartLink
        href={next.href}
        passHref
        className='rounded border w-full h-20 px-3 cursor-pointer justify-between items-center flex hover:text-green-500 duration-300'>
        <div>
          <div>{locale.COMMON.NEXT_POST}</div>
          <div> {next.title}</div>
        </div>
        <i className='ml-1 my-1 fas fa-angle-right' />
      </SmartLink>
    </section>
  )
}
