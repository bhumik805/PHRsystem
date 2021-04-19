import { CircularProgress } from '@material-ui/core'
export default ({ text }) => {

  return (
    <div className="loader">
      <CircularProgress /><br />
      {text}
    </div>
  )
}