/**
 * Grades Component
 * @module components/Grades
 * @author Basile Pesin
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Accordion,
  Grid,
  Icon
} from 'semantic-ui-react'

/**
 * Grades page : displays all the grades of a student
 * @extends React.Component
 */
class Grades extends React.Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  /**
   * Rendering method
   */
  render () {
    const { activeIndex } = this.state
    // Notes de test temporaire
    const grades = {
      'S3': [{
        'id': '2I001',
        'total': 67,
        'notes': [{
          'name': 'Controle Continu',
          'value': 12}, {
          'name': 'Partiel',
          'value': 25}, {
          'name': 'Examen',
          'value': 30}
        ]
      }, {
        'id': '2I005',
        'total': 51,
        'notes': [{
          'name': 'Examen',
          'value': 51}
        ]
      }],
      'S4': [{
        'id': '2I002',
        'total': 80,
        'notes': [{
          'name': 'Partiel',
          'value': 30}, {
          'name': 'Examen',
          'value': 50}
        ]
      }]
    }
    let accordions = []
    let i = 0
    for (var key in grades) {
      let semestre = grades[key]
      let accordion = []
      for (var key1 in semestre) {
        let ue = semestre[key1]
        let notes = ue.notes

        accordion.push(<Accordion.Title key={i} active={activeIndex === i} index={i} onClick={this.handleClick}>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column style={{marginBottom: 0}}>
                <Icon name='dropdown' />
                {ue.id}
              </Grid.Column>
              <Grid.Column style={{marginBottom: 0}} textAlign='right'>
                Total : {ue.total}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Accordion.Title>)

        for (var key2 in notes) {
          let note = notes[key2]
          accordion.push(<Accordion.Content key={key1.concat(key2)} active={activeIndex === i}>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column style={{marginBottom: 0}}>
                  {note.name}
                </Grid.Column>
                <Grid.Column style={{marginBottom: 0}} textAlign='right'>
                  Note : {note.value}
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Accordion.Content>)
        }
        i++
      }

      accordions.push(<Segment basic key={key}>
        {key}
        <Accordion fluid styled>
          {accordion}
        </Accordion>
      </Segment>)
    }
    return (
      <Accordion fluid styled>
        {accordions}
      </Accordion>
    )
  }
}

// Grades.propTypes = {
//  grades: PropTypes.object.isRequired,
// }

export default Grades
