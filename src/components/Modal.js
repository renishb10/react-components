import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

function Modal({ onClose, children, actionBar }) {
  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
    setDomReady(true)
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return domReady ? ReactDOM.createPortal(
    <div>
      <div className='fixed inset-0 bg-gray-300 opacity-80' onClick={onClose}></div>
      <div className='fixed inset-40 p-10 bg-white'>
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex-justify-end">
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  ) : null
}

export default Modal