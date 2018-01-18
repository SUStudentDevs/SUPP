/**
 * HomeAuth class
 * @module HomeAuth/index
 * @author Ulysse Fontaine
 */
import React from 'react';
import { 
  Header,
  Grid,
  Form,
  Image,
  Segment,
  Icon,
  Button,
  Message
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { authStart } from '../actions/auth';

/**
 * Authentification (Login) page
 * @extends React.Component
 */
class HomeAuth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username :'', password: ''};
  }

  /**
   * On submission of the form, dispatch an AUTH_START action
   */
  onSubmit = () => {
    const { username, password } = this.state;
    this.props.onLogin(username, password);
  }

  /**
   * On changing a field, change the corresponding state of the app
   */
  onChange = (e, {name, value}) => {
    this.setState({[name]: value});
  }

  /**
   * Rendering method 
   */
  render = () => {

    const {username, password} = this.state;
    return (
      <Grid centered verticalAlign='middle' style={{ height: '100%' }} >
        <Grid.Column style={{ maxWidth: 400 }} >
          <Header as='h1' icon textAlign='center' >
            <Image src='assets/sorbonne-universite-logo.jpg' fluid style={{ width: '200px' }} />
          </Header>

          <Form size='large' error={this.props.loginError}>
            <Segment>

              <Header as='h2' textAlign='center'>
                <Icon name='student' size='small' />
                SU Portail Pédagogique
              </Header>

              <Form.Input error={this.props.loginError}
                name='username'
                value={username}
                fluid
                icon='user'
                iconPosition='left'
                placeholder='N°Étudiant ou Utilisateur'
                onChange={ this.onChange }
              />

              <Form.Input error={this.props.loginError}
                name='password'
                value={password}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Mot de passe'
                type='password'
                onChange={ this.onChange }
              />
              <Button color='teal' fluid size='large' onClick={this.onSubmit}>Connexion</Button>
            </Segment>

            <Message error 
              header='Erreur'
              content='Les identifiants entrés sont erronés'/>

          </Form>

        </Grid.Column>
      </Grid>
    )

  }
}

/**
 * Map hasLoggingFailed application state to props
 * @param {object} state - The state of the app
 * @param {object} props - The previous props
 * @return {object} The new props
 */
const mapStateToProps = (state, props) => {
  return {
    loginError: state.auth.hasLoggingFailed
  }
}

/**
 * Map dispatching of actions to props functions
 * @param {function} dispatch - The dispatch method
 * @return {object} The new props
 */

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username, password) => { dispatch(authStart(username, password)) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeAuth);
