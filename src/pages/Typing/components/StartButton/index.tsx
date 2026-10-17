import { TypingContext, TypingStateActionType } from '../../store'
import { randomConfigAtom } from '@/store'
import { useAtomValue } from 'jotai'
import type { ReactNode } from 'react'
import { useCallback, useContext } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import IconPause from '~icons/tabler/player-pause'
import IconPlay from '~icons/tabler/player-play'
import IconRestart from '~icons/tabler/rotate-clockwise'

export default function StartButton({ isLoading, children }: { isLoading: boolean; children?: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { state, dispatch } = useContext(TypingContext)!
  const randomConfig = useAtomValue(randomConfigAtom)

  const onToggleIsTyping = useCallback(() => {
    !isLoading && dispatch({ type: TypingStateActionType.TOGGLE_IS_TYPING })
  }, [isLoading, dispatch])

  const onClickRestart = useCallback(() => {
    dispatch({ type: TypingStateActionType.REPEAT_CHAPTER, shouldShuffle: randomConfig.isOpen })
  }, [dispatch, randomConfig.isOpen])

  useHotkeys('enter', onToggleIsTyping, { enableOnFormTags: true, preventDefault: true }, [onToggleIsTyping])

  return (
    <div className="practice-actions">
      <button className="practice-start" type="button" disabled={isLoading} onClick={onToggleIsTyping}>
        {state.isTyping ? <IconPause /> : <IconPlay />}
        <span>{state.isTyping ? '暂停练习' : state.timerData.time ? '继续练习' : '开始练习'}</span>
        <kbd>Enter</kbd>
      </button>
      <div className="practice-secondary-actions">
        <button className="practice-secondary" type="button" disabled={isLoading} onClick={onClickRestart}>
          <IconRestart />
          <span>重新开始</span>
        </button>
        {children}
      </div>
    </div>
  )
}
