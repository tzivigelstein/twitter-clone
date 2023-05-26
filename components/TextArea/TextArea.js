import { useContext, useEffect } from 'react'
import styles from 'components/TextArea/styles.module.css'
import appContext from 'context/app/appContext'
import { DRAG_IMAGE_STATES } from 'types'
import { uploadImage } from 'firebase/client'

const dragOverStyles = { borderRadius: '6px', border: '3px dashed #1da1f2', margin: '-3px' }

const Index = () => {
  const { task, tweetContent, captureTweetContent, MAX_CHAR, drag, setDrag, setChar, setImage, setTask } =
    useContext(appContext)

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL().then(url => {
          setImage(url)
        })
      }

      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

  const handleChange = e => {
    e.preventDefault()
    captureTweetContent({
      ...tweetContent,
      [e.target.name]: e.target.value,
    })
    setChar(e.target.value.length)
  }

  const handleDragEnter = () => {
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleOnDragLeave = () => {
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleOnDrop = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.UPLOADING)
    const task = uploadImage(e.dataTransfer.files[0])
    setTask(task)
  }

  return (
    <div style={{ width: '100%' }}>
      <textarea
        className={styles.textarea}
        style={drag === DRAG_IMAGE_STATES.DRAG_OVER ? dragOverStyles : {}}
        onDragEnter={handleDragEnter}
        onDragLeave={handleOnDragLeave}
        onDrop={handleOnDrop}
        onChange={handleChange}
        value={tweetContent.area}
        placeholder="What's happening?"
        name="area"
        cols="30"
        rows="5"
        maxLength={MAX_CHAR}
        type="image/*"
      ></textarea>
    </div>
  )
}

export default Index
