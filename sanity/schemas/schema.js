// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'

import teaching from './teaching'
import pastor from './pastor'
import coffeeEvent from './coffeeEvent'
import moutainBikeEvent from './moutainBikeEvent'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    teaching,
    pastor,
    coffeeEvent,
    moutainBikeEvent,
    blockContent,
  ]),
})
