import Button from './Button'
import Container from './Container'
import * as Dropdown from './Dropdown/index'
import * as Grid from './Grid/index'
import * as Nav from './Nav/index'
import Notifications from './Notifications.vue'
import * as Page from './Page/index'
import * as Site from './Site/index'

export const components = {
    Button,
    Container,
    ...Dropdown,
    ...Grid,
    ...Nav,
    Notifications,
    ...Page,
    ...Site,
}