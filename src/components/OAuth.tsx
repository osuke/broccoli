import * as React from 'react'
import { WebView } from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Button
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from './Icon'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import { IStateToPorps, IDispatchToProps, } from '../containers/OAuth'

type IProps = IStateToPorps & IDispatchToProps

export default class OAuth extends React.Component<IProps> {
  componentDidMount () {
    this.props.getRequestToken()
  }

  render () {
    if (this.props.url) {
      return (
        <Container>
          <StyledHeader>
            <Left>
              <Button
                transparent
                onPress={Actions.pop}
              >
                <Icon
                  name="close"
                />
              </Button>
            </Left>
            <Body>
              <StyledTitle>ログイン</StyledTitle>
            </Body>
            <Right>
            </Right>
          </StyledHeader>
          <WebView
            source={{ uri: this.props.url }}
            onNavigationStateChange={e => {
              console.log(e)
              if (e.loading === false) {
                this.props.getAccessToken(e)
              }
            }}
          />
        </Container>
      )
    } else {
      return null
    }
  }
}
