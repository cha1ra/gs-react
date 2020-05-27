import { createMuiTheme } from '@material-ui/core/styles'
import yellow from '@material-ui/core/colors/yellow'
import cyan from '@material-ui/core/colors/cyan'

export const Theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: cyan,
    secondary: yellow
  }
})
