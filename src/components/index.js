import * as Alert from './Alert/index'
import Button from './Button'
import * as Card from './Card/index'
import Container from './Container'
import * as Dropdown from './Dropdown/index'
import * as Grid from './Grid/index'
import * as Nav from './Nav/index'
import Notifications from './Notifications.vue'
import * as Page from './Page/index'
import ProgressCard from './ProgressCard.vue'
import * as Site from './Site/index'
import StatsCard from './StatsCard.vue'

export const components = {
    ...Alert,
    Button,
    ...Card,
    Container,
    ...Dropdown,
    ...Grid,
    ...Nav,
    Notifications,
    ...Page,
    ProgressCard,
    ...Site,
    StatsCard
}