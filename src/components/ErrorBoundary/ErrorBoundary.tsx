import React, { PureComponent } from 'react'
import { Typography } from '@material-ui/core'
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles'

const styles = () => createStyles({
  root: {
    display: 'grid',
    placeItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',

    '& h5': {
      color: '#7a7a7a'
    }
  }
})

interface ErrorBoundaryProps extends WithStyles<typeof styles> {}

type ErrorBoundaryState = {
  hasError: boolean;
}

class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch () {
    this.setState({ hasError: true })
  }

  render () {
    const { classes } = this.props
    return this.state.hasError ? (
      <div className={classes.root}>
        <Typography variant='h5'>
          Unknown Error. Please refresh this page.
        </Typography>
      </div>
    ) : (
      this.props.children
    )
  }
}

export default withStyles(styles)(ErrorBoundary)
