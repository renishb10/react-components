import useNavigation from '../hooks/useNavigation';
import classNames from 'classnames';

function Link({ to, children }) {
  const { navigate } = useNavigation()

  const classes = classNames('text-blue-500')

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault()

    navigate(to)
  }

  return (
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  )
}

export default Link