import './styles.css'

export const Header: React.FC = () => {
    const user = sessionStorage.getItem('username')
  return <h2>Real Chat by {user!.replace('"', '').replace('"', '')}</h2>
}
