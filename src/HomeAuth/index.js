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

class HomeAuth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username :'', password: ''};
  }

  onSubmit = () => {
    const { username, password } = this.state;
    this.props.onLogin(username, password);
  }

  onChange = (e, {name, value}) => {
    this.setState({[name]: value});
  }

  render() {

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
                TopNivo
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

const mapStatesToProps = (state) => {
  return {
    loginError: state.auth.hasLoggingFailed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username, password) => { dispatch(authStart(username, password)) }
  };
}

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(HomeAuth);
