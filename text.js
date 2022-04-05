import {Text} from 'troika-three-text'

// Create:
const myText = new Text()
myScene.add(myText)

// Set properties to configure:
myText.text = 'haciendo pruebas!'
myText.fontSize = 0.2
myText.position.z = -2
myText.color = 0x9966FF

// Update the rendering:
myText.sync()